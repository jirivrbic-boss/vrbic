"use client";

import { useEffect, useRef, useState } from "react";
import { Apple, Battery, Wifi, LogOut } from "lucide-react";
import { useWindowStore } from "@/store/windowStore";
import { getApp } from "@/lib/apps";
import { useT } from "@/i18n/useT";
import { useLocaleStore } from "@/store/localeStore";

export function TopBar() {
  const t = useT();
  const locale = useLocaleStore((s) => s.locale);
  const toggleLocale = useLocaleStore((s) => s.toggleLocale);
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
      if (!appleRef.current?.contains(e.target as Node)) setAppleOpen(false);
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

  const appName = activeWindow
    ? t(getApp(activeWindow).titleKey)
    : t("topbar.finder");

  const dateLocale = locale === "en" ? "en-GB" : "cs-CZ";

  const timeLabel = now
    ? new Intl.DateTimeFormat(dateLocale, {
        weekday: "short",
        day: "numeric",
        month: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now)
    : "";

  const timeShort = now
    ? new Intl.DateTimeFormat(dateLocale, {
        hour: "2-digit",
        minute: "2-digit",
      }).format(now)
    : "";

  const menuItems = [
    t("topbar.file"),
    t("topbar.edit"),
    t("topbar.view"),
    t("topbar.window"),
    t("topbar.help"),
  ];

  return (
    <header className="pointer-events-auto absolute inset-x-0 top-0 z-[1000] flex h-9 items-center justify-between bg-black/25 px-2 pt-[env(safe-area-inset-top)] text-[12px] text-white/95 shadow-sm backdrop-blur-2xl sm:h-8 sm:px-3 sm:text-[13px]">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <div ref={appleRef} className="relative">
          <button
            type="button"
            aria-label="Apple menu"
            aria-expanded={appleOpen}
            onClick={() => {
              if (!isUnlocked) return;
              setAppleOpen((v) => !v);
            }}
            className={`flex size-7 items-center justify-center rounded transition sm:size-5 ${
              appleOpen ? "bg-white/20" : "hover:bg-white/15 active:bg-white/20"
            } ${isUnlocked ? "cursor-pointer" : "cursor-default"}`}
          >
            <Apple className="size-3.5 fill-white" strokeWidth={0} />
          </button>

          {appleOpen && isUnlocked && (
            <div className="absolute top-[calc(100%+4px)] left-0 z-[1100] min-w-[200px] overflow-hidden rounded-lg border border-white/15 bg-[#2c2c2e]/95 py-1 text-[13px] text-white shadow-2xl backdrop-blur-xl">
              <div className="border-b border-white/10 px-3 py-2 text-[11px] text-white/45">
                {t("topbar.portfolio")}
              </div>
              <button
                type="button"
                onClick={() => {
                  setAppleOpen(false);
                  lock();
                }}
                className="flex w-full items-center gap-2 px-3 py-2.5 text-left transition hover:bg-[#0a84ff] active:bg-[#0a84ff]"
              >
                <LogOut className="size-3.5 opacity-80" />
                <span className="flex-1">{t("topbar.logout")}</span>
              </button>
            </div>
          )}
        </div>

        {isUnlocked && (
          <>
            <span className="truncate font-semibold tracking-tight">
              {appName}
            </span>
            <nav className="hidden items-center gap-3 lg:flex">
              {menuItems.map((item) => (
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

      <div className="flex shrink-0 items-center gap-2 text-white/90 sm:gap-3">
        <button
          type="button"
          onClick={toggleLocale}
          title={t("topbar.langTitle")}
          className="rounded px-1.5 py-0.5 text-[11px] font-bold tracking-wide transition hover:bg-white/15 active:bg-white/20"
        >
          {t("topbar.lang")}
        </button>
        <Battery className="hidden size-3.5 sm:block" strokeWidth={1.75} />
        <Wifi className="size-3.5" strokeWidth={1.75} />
        <time className="tabular-nums tracking-tight sm:min-w-[7.5rem] sm:text-right">
          <span className="sm:hidden">{timeShort}</span>
          <span className="hidden sm:inline">{timeLabel}</span>
        </time>
      </div>
    </header>
  );
}
