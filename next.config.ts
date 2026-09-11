import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tvmaze.com",
        pathname: "/uploads/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
