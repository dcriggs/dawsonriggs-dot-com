import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "944czb3eeekaapu3.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
