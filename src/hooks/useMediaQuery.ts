"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** Phones + small tablets in portrait-ish widths */
export function useIsCompact() {
  return useMediaQuery("(max-width: 899px)");
}

export function useIsPhone() {
  return useMediaQuery("(max-width: 639px)");
}
