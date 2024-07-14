/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: "https://track.mainulhasan05.xyz",
    // API: "http://localhost:5000",
    // IMAGE_URL: "https://track.mainulhasan05.xyz",
    IMAGE_URL: "http://localhost:5000",
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
