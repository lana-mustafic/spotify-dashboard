# 🎵 Spotify Dashboard

A modern, personal Spotify dashboard that displays your listening statistics, top artists, and tracks. Built with Next.js, NextAuth.js, and the Spotify Web API.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

-  **Secure Authentication** - OAuth 2.0 login with Spotify
-  **Personalized Dashboard** - View your top artists and tracks
-  **Modern UI** - Clean, responsive design with Tailwind CSS
-  **Fast Performance** - Built with Next.js 15 and App Router
-  **Type Safety** - Full TypeScript implementation

## Getting Started

### Prerequisites

- Node.js 18+ 
- Spotify Developer Account
- GitHub Account

# Installation

## 1. Clone the repository
   ```bash
   git clone https://github.com/lana-mustafic/spotify-dashboard.git
   cd spotify-dashboard
   ```
  
## 2. Install dependencies
```bash
npm install
```
## 3. Environment Setup
- Create a `.env.local` file in the root directory  
- Add your Spotify API credentials:  

```text
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:3000
```
## 4. Run the development server
```bash
npm run dev
```
## 5. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000)

# Spotify App Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)  
2. Create a new app  
3. Add the following Redirect URI:  
http://localhost:3000/api/auth/callback/spotify  
4. Copy your **Client ID** and **Client Secret** into your `.env.local` file  

## Tech Stack

- **Framework:** Next.js 15 with App Router  
- **Authentication:** NextAuth.js with Spotify provider  
- **Styling:** Tailwind CSS  
- **Language:** TypeScript  
- **API:** Spotify Web API  

# Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts          # NextAuth configuration
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   └── Providers.tsx                 # Session provider
├── types/
│   └── next-auth.d.ts                # TypeScript type extensions
└── components/                       # React components
```
# What I Learned

- Implementing **OAuth 2.0 authentication** with NextAuth.js  
- **TypeScript integration** with Next.js App Router  
- **Spotify Web API** integration and data fetching  
- **Environment variable management** and security best practices  
- **Next.js API route structure** and server-side functionality  

# Future Enhancements

- Data visualizations with **Recharts**  
- Recent listening history  
- Audio features analysis  
- Playlist recommendations  
- Dark/light theme toggle  
- Mobile-responsive improvements  

# License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

# Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues](./issues) page.

> **Note:** This project is for educational purposes and personal use.  
> Make sure to comply with Spotify's Developer Terms of Service.

