import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Page from "./app/page/page";
import AppBackground from "./components/custom/background/app-background";
import { LanguageSelectProvider } from "./components/custom/language-select.tsx/language-select-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppBackground />
        <LanguageSelectProvider>
          <Page />
          <Toaster />
        </LanguageSelectProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
