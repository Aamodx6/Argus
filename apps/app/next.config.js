import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
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
