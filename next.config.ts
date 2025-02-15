import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lakshilpa.com",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "www.bluelankatours.com",
        port: "",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      }
    ]
  },
};

export default nextConfig;
