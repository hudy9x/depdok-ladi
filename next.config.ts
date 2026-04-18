import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the project root so Turbopack doesn't walk up to
    // /Users/hudy/ws/package.json when resolving tailwindcss.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
