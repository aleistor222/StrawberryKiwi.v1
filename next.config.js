/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],

  },
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  },
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     fs: false,
  //     path: false
  //   };

    // return config;
  // },
}

module.exports = nextConfig
