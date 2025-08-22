import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

// ADD this function to generate a random secret
function generateSecret() {
  return process.env.NEXTAUTH_SECRET || Buffer.from(Math.random().toString(36)).toString('base64').slice(0, 32);
}

const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "user-read-email user-top-read",
        },
      },
    }),
  ],
  
  // Added cookie settings:
  cookies: {
    state: {
      name: "next-auth.state",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 900, // 15 minutes
      },
    },
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 900,
      },
    },
  },
  
  // Added this line
  trustHost: true,
  
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
  
  // For development:
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export { authOptions };