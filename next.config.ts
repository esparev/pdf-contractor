import type { NextConfig } from 'next';
import BundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  /* Config options here */
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
