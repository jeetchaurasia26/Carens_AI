import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Carens_AI',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
