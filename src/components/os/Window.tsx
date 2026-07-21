"use client";

import { useMemo, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useDragControls,
} from "framer-motion";
import { useWindowStore, type AppId } from "@/store/windowStore";
import { getApp } from "@/lib/apps";

interface WindowProps {
  id: AppId;
  children: ReactNode;
}

export function Window({ id, children }: WindowProps) {
  const controls = useDragControls();

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
  const windowTitle = app.title;

  const stackIndex = openWindows.indexOf(id);
  const initialPos = useMemo(
    () => ({
      x: 40 + (stackIndex % 4) * 28,
      y: 20 + (stackIndex % 4) * 24,
    }),
    // Only compute once per window mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (!meta) return null;

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          key={id}
          drag={!isMaximized}
          dragControls={controls}
          dragListener={false}
          dragMomentum={false}
          dragElastic={0.08}
          dragConstraints={{
            top: -20,
            left: -160,
            right: 900,
            bottom: 600,
          }}
          onPointerDown={() => focusWindow(id)}
          initial={{ opacity: 0, scale: 0.92, x: initialPos.x, y: initialPos.y }}
          animate={
            isMaximized
              ? { opacity: 1, scale: 1, x: 0, y: 0 }
              : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0, scale: 0.85, y: 120 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          style={{
            zIndex: meta.zIndex,
            width: isMaximized ? "100%" : app.defaultSize.width,
            height: isMaximized
              ? "calc(100% - 5.5rem)"
              : app.defaultSize.height,
            maxWidth: isMaximized ? "100%" : "min(96vw, 980px)",
            maxHeight: isMaximized
              ? "calc(100% - 5.5rem)"
              : "min(78vh, 720px)",
          }}
          className={`pointer-events-auto absolute top-0 left-0 flex flex-col overflow-hidden border border-white/10 bg-[#1c1c1e]/95 shadow-2xl shadow-black/50 backdrop-blur-xl ${
            isMaximized
              ? "inset-x-0 top-0 bottom-20 !h-auto !w-auto rounded-none"
              : "rounded-xl"
          } ${isActive ? "ring-1 ring-white/15" : "brightness-[0.97]"}`}
        >
          <div
            onPointerDown={(e) => {
              focusWindow(id);
              if (!isMaximized) controls.start(e);
            }}
            className="relative flex h-10 shrink-0 cursor-default items-center border-b border-white/5 bg-[#2c2c2e]/85 px-3"
          >
            <div className="z-10 flex items-center gap-2">
              <button
                type="button"
                aria-label="Zavřít"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(id);
                }}
                className="group flex size-3 items-center justify-center rounded-full bg-[#ff5f57] transition hover:brightness-110"
              >
                <span className="text-[8px] font-bold text-black/60 opacity-0 group-hover:opacity-100">
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
                className="group flex size-3 items-center justify-center rounded-full bg-[#febc2e] transition hover:brightness-110"
              >
                <span className="text-[8px] font-bold text-black/60 opacity-0 group-hover:opacity-100">
                  −
                </span>
              </button>
              <button
                type="button"
                aria-label="Maximalizovat"
                onClick={(e) => {
                  e.stopPropagation();
                  maximizeWindow(id);
                }}
                className="group flex size-3 items-center justify-center rounded-full bg-[#28c840] transition hover:brightness-110"
              >
                <span className="text-[7px] font-bold text-black/60 opacity-0 group-hover:opacity-100">
                  +
                </span>
              </button>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="text-[13px] font-medium text-white/80">
                {windowTitle}
              </span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-auto">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
