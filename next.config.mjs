/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jobs-kit.com',
      },
    ],
  },
};

export default nextConfig;
