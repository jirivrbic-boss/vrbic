"use client";

import { useEffect, useRef, useState } from "react";
import {
  Apple,
  Battery,
  Search,
  Wifi,
  Blend,
  LogOut,
} from "lucide-react";
import { useWindowStore } from "@/store/windowStore";
import { getApp } from "@/lib/apps";

const MENU_ITEMS = [
  "Soubor",
  "Úpravy",
  "Zobrazení",
  "Okno",
  "Nápověda",
];

export function TopBar() {
  const activeWindow = useWindowStore((s) => s.activeWindow);
  const isUnlocked = useWindowStore((s) => s.isUnlocked);
  const lock = useWindowStore((s) => s.lock);
  const [now, setNow] = useState<Date | null>(null);
  const [appleOpen, setAppleOpen] = useState(false);
  const appleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!appleOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!appleRef.current?.contains(e.target as Node)) {
        setAppleOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAppleOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [appleOpen]);

  useEffect(() => {
    if (!isUnlocked) setAppleOpen(false);
  }, [isUnlocked]);

  const appName = activeWindow ? getApp(activeWindow).title : "Finder";

  const timeLabel = now
    ? new Intl.DateTimeFormat("cs-CZ", {
        weekday: "short",
        day: "numeric",
        month: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now)
    : "";

  return (
    <header className="pointer-events-auto absolute inset-x-0 top-0 z-[1000] flex h-8 items-center justify-between bg-black/25 px-3 text-[13px] text-white/95 shadow-sm backdrop-blur-2xl">
      <div className="flex items-center gap-3">
        <div ref={appleRef} className="relative">
          <button
            type="button"
            aria-label="Apple menu"
            aria-expanded={appleOpen}
            onClick={() => {
              if (!isUnlocked) return;
              setAppleOpen((v) => !v);
            }}
            className={`flex size-5 items-center justify-center rounded transition ${
              appleOpen ? "bg-white/20" : "hover:bg-white/15"
            } ${isUnlocked ? "cursor-pointer" : "cursor-default"}`}
          >
            <Apple className="size-3.5 fill-white" strokeWidth={0} />
          </button>

          {appleOpen && isUnlocked && (
            <div className="absolute top-[calc(100%+4px)] left-0 z-[1100] min-w-[200px] overflow-hidden rounded-lg border border-white/15 bg-[#2c2c2e]/95 py-1 text-[13px] text-white shadow-2xl backdrop-blur-xl">
              <div className="border-b border-white/10 px-3 py-2 text-[11px] text-white/45">
                Jiří Vrba · Portfolio OS
              </div>
              <button
                type="button"
                onClick={() => {
                  setAppleOpen(false);
                  lock();
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left transition hover:bg-[#0a84ff]"
              >
                <LogOut className="size-3.5 opacity-80" />
                <span className="flex-1">Odhlásit se</span>
                <span className="text-[11px] text-white/40">⏎</span>
              </button>
            </div>
          )}
        </div>

        {isUnlocked && (
          <>
            <span className="font-semibold tracking-tight">{appName}</span>
            <nav className="hidden items-center gap-3 md:flex">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded px-1 py-0.5 transition hover:bg-white/15"
                >
                  {item}
                </button>
              ))}
            </nav>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 text-white/90">
        <Blend className="hidden size-3.5 sm:block" strokeWidth={1.75} />
        <span className="hidden text-[12px] sm:inline">100%</span>
        <Battery className="size-3.5" strokeWidth={1.75} />
        <Wifi className="size-3.5" strokeWidth={1.75} />
        <Search className="size-3.5" strokeWidth={1.75} />
        <time className="min-w-[7.5rem] text-right tabular-nums tracking-tight">
          {timeLabel}
        </time>
      </div>
    </header>
  );
}
