/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: "http://localhost:5000",
    // API:"http://localhost:5000",
    IMAGE_URL: "http://localhost:5000",
  },
};

export default nextConfig;
