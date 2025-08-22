import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.accessToken) {
      console.log('No session or access token');
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { type } = params;
    const searchParams = request.nextUrl.searchParams;
    const timeRange = searchParams.get('time_range') || 'medium_term';
    const limit = searchParams.get('limit') || '20';

    console.log('Fetching top', type, 'for user');

    const response = await fetch(
      `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${session.user.accessToken}`
        }
      }
    );

    if (!response.ok) {
      console.log('Spotify API error:', response.status, response.statusText);
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch top data' },
      { status: 500 }
    );
  }
}