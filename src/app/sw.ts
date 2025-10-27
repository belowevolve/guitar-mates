import { defaultCache } from "@serwist/next/worker";
import type {
  PrecacheEntry,
  RuntimeCaching,
  SerwistGlobalConfig,
} from "serwist";
import {
  CacheFirst,
  ExpirationPlugin,
  NetworkFirst,
  Serwist,
  StaleWhileRevalidate,
} from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    // Change this attribute's name to your `injectionPoint`.
    // `injectionPoint` is an InjectManifest option.
    // See https://serwist.pages.dev/docs/build/configuring
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const DAY_IN_SECONDS = 24 * 60 * 60;
// biome-ignore lint/style/noMagicNumbers: ignore
const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
// biome-ignore lint/style/noMagicNumbers: ignore
const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;

// Custom caching strategies for offline support
const cacheStrategies: RuntimeCaching[] = [
  // Cache RSC prefetch requests
  {
    matcher: ({ request, url: { pathname }, sameOrigin }) =>
      request.headers.get("RSC") === "1" &&
      request.headers.get("Next-Router-Prefetch") === "1" &&
      sameOrigin &&
      !pathname.startsWith("/api/"),
    handler: new StaleWhileRevalidate({
      cacheName: "pages-rsc-prefetch",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 200,
          maxAgeSeconds: DAY_IN_SECONDS, // 24 hours
          maxAgeFrom: "last-used",
        }),
      ],
    }),
  },
  // Cache RSC requests
  {
    matcher: ({ request, url: { pathname }, sameOrigin }) =>
      request.headers.get("RSC") === "1" &&
      sameOrigin &&
      !pathname.startsWith("/api/"),
    handler: new StaleWhileRevalidate({
      cacheName: "pages-rsc",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 200,
          maxAgeSeconds: DAY_IN_SECONDS, // 24 hours
          maxAgeFrom: "last-used",
        }),
      ],
    }),
  },
  // Cache HTML pages with network-first strategy for songs
  {
    matcher: ({ url: { pathname }, sameOrigin }) =>
      sameOrigin &&
      (pathname === "/" ||
        pathname.startsWith("/offline") ||
        pathname === "/create" ||
        pathname === "/settings"),
    handler: new NetworkFirst({
      cacheName: "app-pages",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: WEEK_IN_SECONDS, // 7 days
          maxAgeFrom: "last-used",
        }),
      ],
    }),
  },
  // Cache other HTML pages
  {
    matcher: ({ request, url: { pathname }, sameOrigin }) =>
      request.headers.get("Content-Type")?.includes("text/html") &&
      sameOrigin &&
      !pathname.startsWith("/api/"),
    handler: new StaleWhileRevalidate({
      cacheName: "pages",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 200,
          maxAgeSeconds: DAY_IN_SECONDS, // 24 hours
          maxAgeFrom: "last-used",
        }),
      ],
    }),
  },
  // Cache static assets (CSS, JS, fonts) with cache-first strategy
  {
    matcher: /\.(?:js|css|woff2?|ttf|otf|eot)$/i,
    handler: new CacheFirst({
      cacheName: "static-assets",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: MONTH_IN_SECONDS, // 30 days
          maxAgeFrom: "last-used",
        }),
      ],
    }),
  },
  // Cache images with cache-first strategy
  {
    matcher: /\.(?:png|jpg|jpeg|gif|webp|svg|ico)$/i,
    handler: new CacheFirst({
      cacheName: "static-images",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: MONTH_IN_SECONDS, // 30 days
          maxAgeFrom: "last-used",
        }),
      ],
    }),
  },
];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [...cacheStrategies, ...defaultCache],
  fallbacks: {
    entries: [
      {
        url: "/song-offline",
        matcher({ request }) {
          const url = new URL(request.url);
          return url.pathname.startsWith("/song/");
        },
      },
    ],
  },
});

serwist.addEventListeners();
