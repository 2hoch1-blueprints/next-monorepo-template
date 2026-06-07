import type { NextConfig } from 'next';

const config: NextConfig = {
  transpilePackages: ['@workspace/ui', '@workspace/utils'],
};

export default config;
