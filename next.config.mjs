/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        port: '',
        pathname: '/plus-assets/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pagedone.io',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
