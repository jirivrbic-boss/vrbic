"use client";

import { useMemo, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useDragControls,
} from "framer-motion";
import { useWindowStore, type AppId } from "@/store/windowStore";
import { getApp } from "@/lib/apps";
import { useIsCompact, useIsPhone } from "@/hooks/useMediaQuery";

interface WindowProps {
  id: AppId;
  children: ReactNode;
}

export function Window({ id, children }: WindowProps) {
  const controls = useDragControls();
  const isCompact = useIsCompact();
  const isPhone = useIsPhone();

  const meta = useWindowStore((s) => s.windows[id]);
  const activeWindow = useWindowStore((s) => s.activeWindow);
  const openWindows = useWindowStore((s) => s.openWindows);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const maximizeWindow = useWindowStore((s) => s.maximizeWindow);

  const app = getApp(id);
  const isActive = activeWindow === id;
  const isMinimized = meta?.isMinimized ?? true;
  const isMaximized = meta?.isMaximized ?? false;
  const forceFull = isCompact;
  const displayMaximized = isMaximized || forceFull;
  const windowTitle = app.title;

  const stackIndex = openWindows.indexOf(id);
  const initialPos = useMemo(
    () => ({
      x: isCompact ? 0 : 40 + (stackIndex % 4) * 28,
      y: isCompact ? 0 : 20 + (stackIndex % 4) * 24,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (!meta) return null;

  const btnSize = isPhone ? "size-[18px]" : "size-3";

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          key={id}
          drag={!displayMaximized}
          dragControls={controls}
          dragListener={false}
          dragMomentum={false}
          dragElastic={0.08}
          dragConstraints={{
            top: -20,
            left: -80,
            right: 600,
            bottom: 500,
          }}
          onPointerDown={() => focusWindow(id)}
          initial={{
            opacity: 0,
            scale: isCompact ? 1 : 0.92,
            x: initialPos.x,
            y: initialPos.y,
          }}
          animate={
            displayMaximized
              ? { opacity: 1, scale: 1, x: 0, y: 0 }
              : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0, scale: 0.92, y: isCompact ? 40 : 120 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          style={{
            zIndex: meta.zIndex,
            width: displayMaximized ? "100%" : app.defaultSize.width,
            height: displayMaximized
              ? undefined
              : app.defaultSize.height,
            maxWidth: displayMaximized ? "100%" : "min(96vw, 980px)",
            maxHeight: displayMaximized
              ? undefined
              : "min(78vh, 720px)",
          }}
          className={`pointer-events-auto absolute flex flex-col overflow-hidden border border-white/10 bg-[#1c1c1e]/95 shadow-2xl shadow-black/50 backdrop-blur-xl ${
            displayMaximized
              ? "inset-x-0 top-0 bottom-[4.5rem] !h-auto !w-auto rounded-none sm:bottom-24"
              : "top-0 left-0 rounded-xl"
          } ${isActive ? "ring-1 ring-white/15" : "brightness-[0.97]"}`}
        >
          <div
            onPointerDown={(e) => {
              focusWindow(id);
              if (!displayMaximized) controls.start(e);
            }}
            className="relative flex h-11 shrink-0 cursor-default items-center border-b border-white/5 bg-[#2c2c2e]/85 px-3 sm:h-10"
          >
            <div className="z-10 flex items-center gap-2.5 sm:gap-2">
              <button
                type="button"
                aria-label="Zavřít"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(id);
                }}
                className={`group flex ${btnSize} items-center justify-center rounded-full bg-[#ff5f57] transition hover:brightness-110`}
              >
                <span className="text-[9px] font-bold text-black/60 opacity-100 sm:text-[8px] sm:opacity-0 sm:group-hover:opacity-100">
                  ×
                </span>
              </button>
              <button
                type="button"
                aria-label="Minimalizovat"
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(id);
                }}
                className={`group flex ${btnSize} items-center justify-center rounded-full bg-[#febc2e] transition hover:brightness-110`}
              >
                <span className="text-[9px] font-bold text-black/60 opacity-100 sm:text-[8px] sm:opacity-0 sm:group-hover:opacity-100">
                  −
                </span>
              </button>
              <button
                type="button"
                aria-label="Maximalizovat"
                onClick={(e) => {
                  e.stopPropagation();
                  if (!forceFull) maximizeWindow(id);
                }}
                className={`group flex ${btnSize} items-center justify-center rounded-full bg-[#28c840] transition hover:brightness-110 ${
                  forceFull ? "opacity-50" : ""
                }`}
              >
                <span className="text-[8px] font-bold text-black/60 opacity-100 sm:text-[7px] sm:opacity-0 sm:group-hover:opacity-100">
                  +
                </span>
              </button>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-16">
              <span className="truncate text-[13px] font-medium text-white/80">
                {windowTitle}
              </span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-auto overscroll-contain">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
