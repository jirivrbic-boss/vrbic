"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowStore } from "@/store/windowStore";
import { useIsCompact } from "@/hooks/useMediaQuery";

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

function normalize(a: { x: number; y: number }, b: { x: number; y: number }): Rect {
  const x = Math.min(a.x, b.x);
  const y = Math.min(a.y, b.y);
  return {
    x,
    y,
    w: Math.abs(b.x - a.x),
    h: Math.abs(b.y - a.y),
  };
}

export function DesktopMarquee() {
  const isUnlocked = useWindowStore((s) => s.isUnlocked);
  const isCompact = useIsCompact();
  const [rect, setRect] = useState<Rect | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const activeRef = useRef(false);
  const surfaceRef = useRef<HTMLDivElement>(null);

  const endSelection = useCallback(() => {
    activeRef.current = false;
    startRef.current = null;
    setRect(null);
  }, []);

  useEffect(() => {
    if (!isUnlocked || isCompact) {
      endSelection();
      return;
    }

    const onMove = (e: PointerEvent) => {
      if (!activeRef.current || !startRef.current || !surfaceRef.current) return;
      const bounds = surfaceRef.current.getBoundingClientRect();
      const current = {
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      };
      setRect(normalize(startRef.current, current));
    };

    const onUp = () => endSelection();

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [isUnlocked, isCompact, endSelection]);

  if (!isUnlocked || isCompact) return null;

  return (
    <div
      ref={surfaceRef}
      className="absolute inset-0 top-8 z-[2]"
      onPointerDown={(e) => {
        if (e.button !== 0) return;
        if (e.target !== e.currentTarget) return;

        const bounds = e.currentTarget.getBoundingClientRect();
        const start = {
          x: e.clientX - bounds.left,
          y: e.clientY - bounds.top,
        };
        startRef.current = start;
        activeRef.current = true;
        setRect({ x: start.x, y: start.y, w: 0, h: 0 });
      }}
    >
      {rect && rect.w + rect.h > 2 && (
        <div
          className="pointer-events-none absolute rounded-[1px] border border-[#0a84ff]/80 bg-[#0a84ff]/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
          style={{
            left: rect.x,
            top: rect.y,
            width: rect.w,
            height: rect.h,
          }}
        />
      )}
    </div>
  );
}
