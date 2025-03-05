/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  images: {
    unoptimized: true, // Disable Next.js Image Optimization
  },
};

module.exports = nextConfig;
