// File: src/types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string;
  }
}