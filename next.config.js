/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com", // 기존에 있는 도메인
      "prod-files-secure.s3.us-west-2.amazonaws.com", // 추가한 도메인
    ],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
  env: {
    TOKEN: process.env.NOTION_TOKEN,
    DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
};

module.exports = nextConfig;
