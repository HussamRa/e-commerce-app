import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {hostname: "images.unsplash.com", protocol: "https"}
    ],
  }
};

export default nextConfig;
