import { OfflineIndicator } from "./offline-indicator";
import { ThemeProvider } from "./theme";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <OfflineIndicator />
    {children}
  </ThemeProvider>
);
