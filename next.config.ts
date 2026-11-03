import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/immobilier", destination: "/professionnels", permanent: true },
      { source: "/hotellerie", destination: "/professionnels", permanent: true },
      { source: "/evenements", destination: "/entreprises", permanent: true },
    ];
  },
};

export default nextConfig;
