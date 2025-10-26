"use client";

import { WifiOffIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check initial status
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="-translate-x-1/2 fixed bottom-4 left-1/2 z-50 flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 font-medium text-sm text-white shadow-lg">
      <WifiOffIcon />
      <span>You&apos;re offline - Changes saved locally</span>
    </div>
  );
};
