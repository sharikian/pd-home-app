import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repo_path = '/online-pd'
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? repo_path : '',
  basePath: isProd ? repo_path : '',
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
