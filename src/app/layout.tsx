import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./app.css";

import { Toaster } from "@/shared/ui/sonner";

import { ThemeProvider } from "./providers/theme";

const APP_NAME = "Guitar Mates";
const APP_DESCRIPTION = "Save and share your guitar chords";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s | Guitar Mates",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
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
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
