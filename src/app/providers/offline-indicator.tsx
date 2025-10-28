"use client";

import { WifiOffIcon } from "lucide-react";

import { useOnline } from "@/shared/hooks/use-online";
import { Alert, AlertTitle } from "@/shared/ui/alert";

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
