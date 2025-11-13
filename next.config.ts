import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["https://*.replit.dev", "https://*.repl.co"],
    },
  },
  allowedDevOrigins: ["https://*.replit.dev", "https://*.repl.co"],
};

export default nextConfig;
