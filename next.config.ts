import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/shadeswift',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
