import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Page from "./app/dashboard/page";
import AppBackground from "./components/custom/background/app-background";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppBackground />
        <Page />
      </ThemeProvider>
    </>
  );
}

export default App;
