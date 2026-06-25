import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (ar: string, en: string) => string;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  toggleLang: () => {},
  t: (ar) => ar,
  dir: "rtl",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
