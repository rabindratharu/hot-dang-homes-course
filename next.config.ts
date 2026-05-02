/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_IMAGES_DOMAINS,
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // WARNING: Only for development!
    dangerouslyAllowSVG: true,
    unoptimized: process.env.NODE_ENV === 'development', // Bypasses image optimization
  },
};

module.exports = nextConfig;