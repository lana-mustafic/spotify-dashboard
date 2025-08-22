'use client';

import { useSpotifyData } from '../hooks/useSpotifyData';

interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
  genres: string[];
}

export default function TopArtists() {
  const { data, loading, error } = useSpotifyData<{ items: Artist[] }>('top/artists');

  if (loading) return <div>Loading artists...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.items.slice(0, 6).map((artist: Artist) => ( // Add type annotation
        <div key={artist.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={artist.images[0]?.url || '/placeholder-artist.jpg'}
            alt={artist.name}
            className="w-full h-32 object-cover rounded-md mb-2"
          />
          <h3 className="font-semibold text-lg">{artist.name}</h3>
          <p className="text-gray-600 text-sm">
            {artist.genres.slice(0, 2).join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
}