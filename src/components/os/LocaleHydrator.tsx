"use client";

import { useEffect } from "react";
import { hydrateLocale } from "@/store/localeStore";

export function LocaleHydrator() {
  useEffect(() => {
    hydrateLocale();
  }, []);
  return null;
}
