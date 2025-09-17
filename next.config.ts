import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Next.js 자동 리사이징/최적화 무시
  },
};

export default nextConfig;
