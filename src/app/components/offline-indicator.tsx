"use client";

import { CheckIcon, DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/shared/ui/button";

async function isUrlCached(url: string): Promise<boolean> {
  if (typeof window === "undefined" || !("caches" in window)) {
    return false;
  }
  try {
    const res = await caches.match(url, { ignoreSearch: true });
    return Boolean(res);
  } catch {
    return false;
  }
}

const SERVICE_WORKER_RESPONSE_TIMEOUT_MS = 3000;

function cacheUrls(urls: string[]): Promise<boolean> {
  if (
    typeof window === "undefined" ||
    !("serviceWorker" in navigator) ||
    !navigator.serviceWorker.controller
  ) {
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const channel = new MessageChannel();
    channel.port1.onmessage = () => resolve(true);
    const controller = navigator.serviceWorker.controller;
    if (!controller) {
      resolve(false);
      return;
    }
    controller.postMessage(
      { type: "CACHE_URLS", payload: { urlsToCache: urls } },
      [channel.port2]
    );
    // Fallback resolve in case SW doesn't respond
    setTimeout(() => resolve(false), SERVICE_WORKER_RESPONSE_TIMEOUT_MS);
  });
}

export const OfflineReadyButton = ({ songId }: { songId: string }) => {
  const [ready, setReady] = useState(false);
  const url = `/song/${songId}`;

  useEffect(() => {
    let mounted = true;
    isUrlCached(url).then((v) => {
      if (mounted) {
        setReady(v);
      }
    });
    return () => {
      mounted = false;
    };
  }, [url]);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const ok = await cacheUrls([url]);
    if (ok) {
      setReady(true);
    }
  };

  return (
    <Button
      aria-label={
        ready ? "Song is available offline" : "Cache song for offline"
      }
      onClick={onClick}
      size="icon-sm"
      type="button"
      variant="ghost"
    >
      {ready ? <CheckIcon className="text-primary" /> : <DownloadIcon />}
    </Button>
  );
};
