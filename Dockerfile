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

# Run the build script (includes next build, sub-clean, and mv)
RUN npm run build

# Stage 3: Run Tests with Next.js and JSON Server
FROM node:18-alpine AS test
WORKDIR /app

# Copy the built project and dependencies
COPY --from=build /app ./

# Expose ports: 3000 for Next.js, 9090 for JSON server
EXPOSE 3000

# Run tests (concurrently runs npm start and npm run server)
CMD ["npm", "start"]
