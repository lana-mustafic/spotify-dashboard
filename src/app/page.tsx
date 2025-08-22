'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import TopArtists from "@/components/TopArtists";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className="flex min-h-screen items-center justify-center"><p>Loading...</p></main>;
  }

  if (session) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {session.user?.name}!</h1>
              <p className="text-gray-600">Your Spotify Dashboard</p>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Top Artists</h2>
            <TopArtists />
          </section>
        </div>
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