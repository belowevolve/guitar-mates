"use client";

import { useTheme } from "next-themes";

import { Button } from "@/shared/ui/button";

export default function SettingsPage() {
  const { setTheme } = useTheme();

  return (
    <main>
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("system")}>System</Button>
    </main>
  );
}
