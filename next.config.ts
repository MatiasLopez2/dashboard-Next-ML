import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
  return [
    {
      source: '/((?!customers/).*)', // todo menos /customers/
      destination: '/dashboard',
      permanent: false,
    },
  ];
}
};

export default nextConfig;
