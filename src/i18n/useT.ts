"use client";

import { useCallback } from "react";
import { useLocaleStore } from "@/store/localeStore";
import { translate } from "@/i18n/ui";

export function useT() {
  const locale = useLocaleStore((s) => s.locale);
  return useCallback((key: string) => translate(locale, key), [locale]);
}

export function useLocale() {
  return useLocaleStore((s) => s.locale);
}
