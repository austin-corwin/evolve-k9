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
  env: {
    NEXT_STRAPI_API_TOKEN: process.env.NEXT_STRAPI_API_TOKEN,
    NEXT_STRAPI_HEADERS_AUTH_TOKEN: process.env.NEXT_STRAPI_HEADERS_AUTH_TOKEN
  }
};

module.exports = nextConfig;
