import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')],
  }
};

export default nextConfig;
