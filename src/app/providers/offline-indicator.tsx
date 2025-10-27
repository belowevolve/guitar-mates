"use client";

import { WifiOffIcon } from "lucide-react";

import { Alert, AlertTitle } from "@/shared/components/alert";
import { useOnline } from "@/shared/hooks/use-online";

export const OfflineIndicator = () => {
  const isOnline = useOnline();

  if (isOnline) {
    return null;
  }

  return (
    <Alert>
      <WifiOffIcon className="size-4" />
      <AlertTitle>You&apos;re offline - Changes saved locally</AlertTitle>
    </Alert>
  );
};
