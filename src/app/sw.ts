/** biome-ignore-all lint/correctness/noUnusedVariables: <explanation> */
import { defaultCache } from "@serwist/next/worker";
import type {
  PrecacheEntry,
  RuntimeCaching,
  SerwistGlobalConfig,
} from "serwist";
import { ExpirationPlugin, NetworkFirst, Serwist } from "serwist";

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
];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [...defaultCache],
  fallbacks: {
    entries: [
      {
        url: "/offline-song",
        matcher({ request }) {
          const url = new URL(request.url);
          return (
            request.destination === "document" &&
            url.pathname.startsWith("/song")
          );
        },
      },
    ],
  },
});

serwist.addEventListeners();
