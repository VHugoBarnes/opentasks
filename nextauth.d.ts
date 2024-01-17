import NextAuth, { DefaultSession } from "next-auth";

// Here we just extend the user session type to add fields from the user model
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      name: string;
      profilePhoto: string;
      timezone: string;
    } & DefaultSession["user"]
  }
}