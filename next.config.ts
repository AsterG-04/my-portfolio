import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ enables static export for Firebase Hosting
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
