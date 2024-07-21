/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.STRAPI_ASSETS_BASE_URL}`, "localhost"],
  },
  headers: [
    {
      key: "Access-Control-Allow-Origin",
      value: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
};

module.exports = nextConfig;
