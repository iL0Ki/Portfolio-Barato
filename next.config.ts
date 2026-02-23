import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Fix Windows case-sensitivity issue where the same module gets loaded
    // twice with different casings (e.g. Portfolio-Ericson vs portfolio-ericson),
    // causing duplicate React contexts and the "invariant expected layout
    // router to be mounted" error.
    config.resolve = config.resolve || {};
    config.resolve.symlinks = false;

    // Normalize the project root to its true filesystem casing
    const projectRoot = path.resolve(__dirname);
    config.resolve.alias = {
      ...config.resolve.alias,
      [projectRoot.toLowerCase()]: projectRoot,
    };

    return config;
  },
};

export default nextConfig;
