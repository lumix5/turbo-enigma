/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: [require("daisyui")],
  images: {
    domains: ["static.wikia.nocookie.net"],
  },
};

module.exports = nextConfig;
