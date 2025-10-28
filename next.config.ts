// @ts-check

import { execSync } from "node:child_process";

import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

// Use git commit hash as cache version
const SHORT_REVISION_LENGTH = 7;
const revision = execSync("git rev-parse HEAD", { encoding: "utf8" })
  .trim()
  .slice(0, SHORT_REVISION_LENGTH);

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  reloadOnOnline: false,
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [
    { url: "/", revision },
    { url: "/song", revision },
    { url: "/create", revision },
    { url: "/settings", revision },
    { url: "/manifest.json", revision },
  ],
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    viewTransition: true,
  },
};

export default withSerwist(nextConfig);
