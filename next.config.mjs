/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API:"https://mess.rifatewu2.xyz",
    // API:"http://localhost:5000",
    TOKEN_NAME:"mess_token"
  }
};

export default nextConfig;
