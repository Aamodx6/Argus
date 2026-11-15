import "./src/env.js";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4321";

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/",
        destination: siteUrl,
        permanent: false,
      },
      {
        source: "/login",
        destination: `${siteUrl}/login`,
        permanent: false,
      },
      {
        source: "/signup",
        destination: `${siteUrl}/signup`,
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: `${siteUrl}/console`,
        permanent: false,
      },
      {
        source: "/console",
        destination: `${siteUrl}/console`,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, x-aspect-api-key" },
        ],
      },
    ];
  },
};

export default config;
