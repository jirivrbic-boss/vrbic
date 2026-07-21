"use client";

import { Monitor } from "lucide-react";

export function MobileNotice() {
  return (
    <div className="pointer-events-none absolute inset-x-3 bottom-28 z-[950] md:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-sm items-start gap-3 rounded-2xl border border-white/20 bg-black/55 p-3 text-white shadow-xl backdrop-blur-xl">
        <Monitor className="mt-0.5 size-5 shrink-0 text-sky-300" />
        <div>
          <p className="text-sm font-semibold">Nejlepší na desktopu</p>
          <p className="mt-0.5 text-xs leading-relaxed text-white/70">
            Toto portfolio napodobuje macOS. Pro plný zážitek (přetahování oken,
            Dock) otevři stránku na větším displeji.
          </p>
        </div>
      </div>
    </div>
  );
}
