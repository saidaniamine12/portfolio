import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Page from "./app/page/page";
import AppBackground from "./components/custom/background/app-background";
import { LanguageSelectProvider } from "./components/custom/language-select.tsx/language-select-provider";
import { Toaster } from "./components/ui/toaster";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  // -750
  useEffect(() => {
    AOS.init({
      duration: 950,
      easing: "ease-in-out",
      once: true,
      offset: -750,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppBackground setLoaded={setLoaded} />

        <LanguageSelectProvider>
          {loaded && <Page />}
          <Toaster />
        </LanguageSelectProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
