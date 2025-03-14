import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string; // Add the 'role' property as an optional string
  }

  interface Session {
    user: {
      role: string;
      id: string; // Add id to the user object
      name?: string | null;
    };
  }
}