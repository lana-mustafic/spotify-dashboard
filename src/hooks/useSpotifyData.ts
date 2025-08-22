'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function useSpotifyData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user.accessToken) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/spotify/${endpoint}`);
        
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session, endpoint]);

  return { data, loading, error };
}