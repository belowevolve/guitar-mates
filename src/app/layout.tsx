import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./app.css";

import { Toaster } from "@/shared/ui/sonner";

import { ClientProvider } from "./providers/client";

const APP = {
  NAME: "Guitar mates",
  DESCRIPTION: "Save and share your guitar chords",
} as const;

export const metadata: Metadata = {
  applicationName: APP.NAME,
  title: {
    default: APP.NAME,
    template: `%s | ${APP.NAME}`,
  },
  description: APP.DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP.NAME,
  },
  icons: {
    shortcut: "/icons/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <body className="mx-auto min-h-dvh w-full max-w-md">
        <ClientProvider>{children}</ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
