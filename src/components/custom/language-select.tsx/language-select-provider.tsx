// LanguageSelectProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "EN" | "FR";

interface LanguageSelectContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageSelectContext = createContext<LanguageSelectContextType>({
  language: "EN",
  setLanguage: () => {},
});

export const LanguageSelectProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get stored language from localStorage or default to EN
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem(
        "selectedLanguage"
      ) as Language | null;
      return storedLang || "EN";
    }
    return "EN";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lang);
    }
  };

  // Optional: Sync language across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "selectedLanguage") {
        setLanguageState(e.newValue as Language);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <LanguageSelectContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageSelectContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageSelectContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageSelectProvider");
  }
  return context;
};
