/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.STRAPI_ASSETS_BASE_URL}`, "localhost"],
  },
};

module.exports = nextConfig;
