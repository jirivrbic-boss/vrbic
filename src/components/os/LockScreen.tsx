"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useWindowStore } from "@/store/windowStore";

const FAKE_PASSWORD = "vrbiic2026";

export function LockScreen() {
  const unlock = useWindowStore((s) => s.unlock);
  const [now, setNow] = useState<Date | null>(null);
  const [password, setPassword] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const manualRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timersRef.current.push(t);
      return t;
    };

    const clearAll = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    let charIndex = 0;

    const typeNext = () => {
      if (manualRef.current) return;

      if (charIndex < FAKE_PASSWORD.length) {
        charIndex += 1;
        setPassword(FAKE_PASSWORD.slice(0, charIndex));
        setShowCaret(true);
        schedule(typeNext, 85 + Math.random() * 80);
      } else {
        setShowCaret(false);
        schedule(() => {
          if (manualRef.current) return;
          charIndex = 0;
          setPassword("");
          setShowCaret(true);
          schedule(typeNext, 500);
        }, 1800);
      }
    };

    schedule(typeNext, 700);

    return clearAll;
  }, []);

  const stopAutoType = () => {
    if (manualRef.current) return;
    manualRef.current = true;
    setShowCaret(false);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const dateLabel = now
    ? new Intl.DateTimeFormat("cs-CZ", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }).format(now)
    : "";

  const timeLabel = now
    ? new Intl.DateTimeFormat("cs-CZ", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(now)
    : "";

  return (
    <motion.div
      className="pointer-events-auto absolute inset-0 z-[800] flex flex-col items-center justify-center bg-black/25 backdrop-blur-[3px]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-16 text-center text-white drop-shadow-lg">
        <p className="text-2xl font-medium capitalize tracking-wide sm:text-3xl">
          {dateLabel}
        </p>
        <p className="mt-1 text-7xl font-semibold tracking-tight sm:text-8xl">
          {timeLabel}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-700 text-2xl font-semibold text-white shadow-xl ring-2 ring-white/30 sm:size-24 sm:text-3xl">
          JV
        </div>
        <p className="text-lg font-medium text-white drop-shadow">Jiří Vrba</p>

        <form
          className="mt-2 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            unlock();
          }}
        >
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                stopAutoType();
                setPassword(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") stopAutoType();
              }}
              onFocus={() => {
                /* keep autofocus; don't stop until user types */
              }}
              className="h-9 w-52 rounded-full border border-white/20 bg-black/35 px-4 pr-8 text-sm tracking-[0.25em] text-white outline-none backdrop-blur-md focus:border-white/40 sm:w-64"
              autoFocus
              autoComplete="off"
              spellCheck={false}
              aria-label="Heslo"
            />
            {showCaret && (
              <span className="pointer-events-none absolute top-1/2 right-3.5 size-1.5 -translate-y-1/2 animate-pulse rounded-full bg-white/70" />
            )}
          </div>
          <button
            type="submit"
            aria-label="Odemknout"
            className="flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30"
          >
            <ArrowRight className="size-4" />
          </button>
        </form>
        <p className="mt-1 text-xs text-white/55">
          Stiskni Enter nebo šipku pro přihlášení
        </p>
      </div>
    </motion.div>
  );
}
