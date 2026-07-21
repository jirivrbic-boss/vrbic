"use client";

import { useRef, useState, type ComponentType } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Compass,
  FolderKanban,
  UserRound,
} from "lucide-react";
import { DOCK_APPS, type AppDefinition } from "@/lib/apps";
import { useWindowStore, type AppId } from "@/store/windowStore";

const ICONS: Record<AppId, ComponentType<{ className?: string }>> = {
  about: UserRound,
  experience: BriefcaseBusiness,
  skills: Code2,
  projects: FolderKanban,
  safari: Compass,
  discord: Compass,
};

const ICON_COLORS: Record<AppId, string> = {
  about: "from-sky-400 to-blue-600",
  experience: "from-orange-400 to-orange-700",
  skills: "from-lime-400 to-emerald-700",
  projects: "from-cyan-300 to-fuchsia-600",
  safari: "from-blue-400 to-blue-700",
  discord: "from-[#5865F2] to-[#404EED]",
};

function DockIcon({
  app,
  mouseX,
}: {
  app: AppDefinition;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const openWindows = useWindowStore((s) => s.openWindows);
  const windows = useWindowStore((s) => s.windows);
  const openWindow = useWindowStore((s) => s.openWindow);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (bounds == null || val === Infinity) return 150;
    return val - (bounds.left + bounds.width / 2);
  });

  const sizeSync = useTransform(distance, [-140, 0, 140], [52, 78, 52]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 180, damping: 14 });

  const isOpen = openWindows.includes(app.id);
  const isMinimized = windows[app.id]?.isMinimized;
  const Icon = ICONS[app.id];

  return (
    <div className="relative flex flex-col items-center">
      {hovered && (
        <div className="pointer-events-none absolute -top-9 rounded-md bg-black/70 px-2 py-1 text-[11px] text-white backdrop-blur-md">
          {app.label}
        </div>
      )}
      <motion.button
        ref={ref}
        type="button"
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => openWindow(app.id)}
        aria-label={app.label}
      >
        <div
          className={`flex size-full items-center justify-center rounded-[22%] bg-gradient-to-br ${ICON_COLORS[app.id]} shadow-lg shadow-black/30 ring-1 ring-white/25`}
        >
          <Icon className="size-[46%] text-white drop-shadow" />
        </div>
        {isOpen && (
          <span
            className={`absolute -bottom-1.5 size-1 rounded-full ${
              isMinimized ? "bg-white/40" : "bg-white"
            }`}
          />
        )}
      </motion.button>
    </div>
  );
}

export function Dock() {
  const mouseX = useMotionValue(Infinity);
  const isUnlocked = useWindowStore((s) => s.isUnlocked);

  if (!isUnlocked) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-3 z-[900] flex justify-center px-3">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.15 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex items-end gap-2 rounded-2xl border border-white/20 bg-white/15 px-3 py-2 shadow-2xl backdrop-blur-2xl"
      >
        {DOCK_APPS.map((app) => (
          <DockIcon key={app.id} app={app} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
}
