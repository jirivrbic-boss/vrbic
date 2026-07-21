import { create } from "zustand";

export type Locale = "cs" | "en";

const STORAGE_KEY = "portfolio-locale";

interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

function loadLocale(): Locale {
  if (typeof window === "undefined") return "cs";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "en" || raw === "cs") return raw;
  } catch {
    /* ignore */
  }
  return "cs";
}

export const useLocaleStore = create<LocaleStore>((set, get) => ({
  locale: "cs",
  setLocale: (locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    set({ locale });
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  },
  toggleLocale: () => {
    const next = get().locale === "cs" ? "en" : "cs";
    get().setLocale(next);
  },
}));

export function hydrateLocale() {
  useLocaleStore.getState().setLocale(loadLocale());
}
