import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/ui/theme-provider";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <ThemeProvider defaultTheme="light" storageKey="brillaris-theme">
      <App />
    </ThemeProvider>
  );
}
