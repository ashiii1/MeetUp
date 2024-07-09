/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
};

export default nextConfig;
