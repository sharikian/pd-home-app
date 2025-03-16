# Stage 1: CI Environment (Clean Install Dependencies)
FROM node:18-alpine AS ci
WORKDIR /app

# Copy package.json and package-lock.json for npm ci
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Stage 2: Build the Next.js Project
FROM node:18-alpine AS build
WORKDIR /app

# Copy dependencies and files from the CI stage
COPY --from=ci /app ./

# Create .env file with environment variables
RUN echo "NEXTAUTH_SECRET=vAjVKzU2wNPbrQTRVVmLuKGt4Evqy9NH24myyREBPFU" > .env && \
    echo "REQ_URL=https://pd-home-app-production.up.railway.app" > .env && \
    echo "NEXTAUTH_URL=https://pd-home-app-production.up.railway.app" >> .env

# Run the build script (includes next build, sub-clean, and mv)
RUN npm run build

# Stage 3: Run Tests with Next.js (No JSON Server anymore)
FROM node:18-alpine AS test
WORKDIR /app

# Copy the built project and dependencies, including .env
COPY --from=build /app ./

# Expose port 3000 for Next.js
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]