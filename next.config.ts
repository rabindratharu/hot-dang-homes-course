import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_IMAGES_DOMAINS ?? "",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
    // WARNING: Only for development!
    dangerouslyAllowSVG: true,
    unoptimized: process.env.NODE_ENV === "development", // Bypasses image optimization
  },
};

export default nextConfig;
