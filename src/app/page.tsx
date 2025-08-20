// File: src/app/page.tsx
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>Welcome, {session.user?.name}!</p>
        <p>You are now logged in.</p>
        <br />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Please log in to see your Spotify stats.</p>
      <br />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("spotify")}
      >
        Sign in with Spotify
      </button>
    </main>
  );
}