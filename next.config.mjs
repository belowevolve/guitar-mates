// @ts-check

import { execSync } from "node:child_process";

import withSerwistInit from "@serwist/next";

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
  additionalPrecacheEntries: [{ url: "/", revision }],
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withSerwist(nextConfig);
