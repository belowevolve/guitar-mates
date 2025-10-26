import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./app.css";

import { Toaster } from "@/shared/ui/sonner";

import { OfflineIndicator } from "./components/offline-indicator";
import { ThemeProvider } from "./providers/theme";

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
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <body className="mx-auto min-h-dvh w-full max-w-md px-2 pt-2">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
          <OfflineIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
