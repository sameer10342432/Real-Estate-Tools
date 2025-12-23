import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co",
  ],
  experimental: {
    workerThreads: false,
    cpus: 1,
    serverActions: {
      allowedOrigins: [
        "*.replit.dev",
        "*.repl.co",
      ],
    },
  },
};

export default nextConfig;
