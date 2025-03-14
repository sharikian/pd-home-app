/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const baseUrl = window.location.origin;
          const [usersRes, adminsRes] = await Promise.all([
            fetch(`${baseUrl}/api/users`),
            fetch(`${baseUrl}/api/admins`),
          ]);
          const users = await usersRes.json();
          const admins = await adminsRes.json();

          const allUsers = [
            ...users,
            ...admins.map((admin: any) => ({ ...admin, role: "admin" })),
          ];

          const user = allUsers.find(
            (u: any) =>
              u.username === credentials?.username &&
              u.password === credentials?.password
          );

          if (user) {
            return {
              id: user.id?.toString() || user.username, // Use JSON server's id if available, fallback to username
              name: user.username,
              role: user.role || "user",
            };
          }
          return null;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Pass the id to the JWT token
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string; // Add id to session.user
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};