import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Page from "./app/dashboard/page";
import AppBackground from "./components/custom/background/app-background";
import { LanguageSelectProvider } from "./components/custom/language-select.tsx/language-select-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppBackground />
        <LanguageSelectProvider>
          <Page />
        </LanguageSelectProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
