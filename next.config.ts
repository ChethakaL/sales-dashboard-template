import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // ✅ do not fail the build because of ESLint errors
        ignoreDuringBuilds: true,
    },
  /* config options here */
};

export default nextConfig;
