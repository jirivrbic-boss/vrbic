"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Palette, Swords, Trophy } from "lucide-react";
import { useWindowStore } from "@/store/windowStore";
import { useIsCompact } from "@/hooks/useMediaQuery";

type DesktopItem =
  | {
      id: string;
      label: string;
      kind: "link";
      href: string;
      gradient: string;
      icon: "faceit" | "instagram" | "behance" | "trophy" | "swords";
    }
  | {
      id: string;
      label: string;
      kind: "copy";
      value: string;
      gradient: string;
      icon: "discord";
    };

type Positions = Record<string, { x: number; y: number }>;

const STORAGE_KEY = "portfolio-desktop-icon-positions";
const ICON_W = 88;
const ICON_H = 96;

const ITEMS: DesktopItem[] = [
  {
    id: "faceit",
    label: "Faceit",
    kind: "link",
    href: "https://www.faceit.com/en/players/vrbiic",
    gradient: "from-[#ff5500] to-[#cc3300]",
    icon: "faceit",
  },
  {
    id: "ig-personal",
    label: "Instagram",
    kind: "link",
    href: "https://www.instagram.com/jiri.vrbic/",
    gradient: "from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    icon: "instagram",
  },
  {
    id: "discord",
    label: "Discord",
    kind: "copy",
    value: "vrbic.",
    gradient: "from-[#5865F2] to-[#404EED]",
    icon: "discord",
  },
  {
    id: "esportarena",
    label: "EsportArena",
    kind: "link",
    href: "https://www.instagram.com/esportarena_tsv/",
    gradient: "from-sky-400 to-blue-700",
    icon: "trophy",
  },
  {
    id: "elite-arena",
    label: "Elite Arena",
    kind: "link",
    href: "https://www.instagram.com/elitearena.tournament/",
    gradient: "from-orange-400 to-red-600",
    icon: "swords",
  },
  {
    id: "behance",
    label: "Behance",
    kind: "link",
    href: "https://www.behance.net/jivrba",
    gradient: "from-[#1769ff] to-[#0057ff]",
    icon: "behance",
  },
];

function defaultPositions(): Positions {
  return Object.fromEntries(
    ITEMS.map((item, i) => [item.id, { x: 16, y: 16 + i * ICON_H }]),
  );
}

function loadPositions(): Positions {
  const defaults = defaultPositions();
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...(JSON.parse(raw) as Positions) };
  } catch {
    return defaults;
  }
}

function savePositions(positions: Positions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    /* ignore */
  }
}

function ItemGlyph({ icon }: { icon: DesktopItem["icon"] }) {
  if (icon === "faceit") {
    return (
      <span className="text-[15px] font-black tracking-tight text-white drop-shadow">
        f
      </span>
    );
  }
  if (icon === "behance") {
    return (
      <span className="text-[13px] font-black tracking-tight text-white drop-shadow">
        Be
      </span>
    );
  }
  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-6 text-white drop-shadow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (icon === "discord") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-6 fill-white drop-shadow"
        aria-hidden
      >
        <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.07.07 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.07.07 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.373-.292a.07.07 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .079.01c.12.098.247.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    );
  }
  if (icon === "trophy") {
    return <Trophy className="size-6 text-white drop-shadow" strokeWidth={2} />;
  }
  if (icon === "swords") {
    return <Swords className="size-6 text-white drop-shadow" strokeWidth={2} />;
  }
  return <Palette className="size-6 text-white drop-shadow" />;
}

function DesktopIconButton({
  item,
  position,
  zIndex,
  onBringFront,
  onMove,
  draggable,
}: {
  item: DesktopItem;
  position: { x: number; y: number };
  zIndex: number;
  onBringFront: () => void;
  onMove: (pos: { x: number; y: number }) => void;
  draggable: boolean;
}) {
  const [selected, setSelected] = useState(false);
  const openSafari = useWindowStore((s) => s.openSafari);
  const openWindow = useWindowStore((s) => s.openWindow);
  const dragDistance = useRef(0);
  const didDrag = useRef(false);
  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y, x, y]);

  const activate = useCallback(() => {
    if (item.kind === "link") {
      openSafari(item.href, item.label);
      return;
    }
    openWindow("discord");
  }, [item, openSafari, openWindow]);

  const content = (
    <div
      className={`flex w-full flex-col items-center gap-1 rounded-lg p-1.5 outline-none sm:gap-1.5 sm:p-2 ${
        selected ? "bg-blue-600/35 ring-1 ring-white/25" : "hover:bg-white/10"
      }`}
      onBlur={() => setSelected(false)}
    >
      <div
        className={`flex size-11 items-center justify-center rounded-[18%] bg-gradient-to-br sm:size-12 ${item.gradient} shadow-lg shadow-black/40 ring-1 ring-white/25`}
      >
        <ItemGlyph icon={item.icon} />
      </div>
      <span
        className={`max-w-full truncate rounded px-1 text-center text-[10px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] sm:text-[11px] ${
          selected ? "bg-blue-600/90" : ""
        }`}
      >
        {item.label}
      </span>
    </div>
  );

  if (!draggable) {
    return (
      <button
        type="button"
        onClick={activate}
        className="pointer-events-auto w-[72px] shrink-0"
        aria-label={item.label}
      >
        {content}
      </button>
    );
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.04}
      style={{ x, y, zIndex, width: ICON_W }}
      className="pointer-events-auto absolute top-0 left-0 cursor-default touch-none select-none"
      onPointerDown={() => {
        dragDistance.current = 0;
        didDrag.current = false;
        onBringFront();
        setSelected(true);
      }}
      onDrag={(_, info) => {
        dragDistance.current += Math.abs(info.delta.x) + Math.abs(info.delta.y);
        if (dragDistance.current > 5) didDrag.current = true;
      }}
      onDragEnd={() => {
        const next = {
          x: Math.max(0, x.get()),
          y: Math.max(0, y.get()),
        };
        x.set(next.x);
        y.set(next.y);
        onMove(next);
      }}
      onClick={(e) => {
        e.preventDefault();
        if (didDrag.current) return;
        activate();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={item.label}
      title={`${item.label} — klik otevře`}
    >
      {content}
    </motion.div>
  );
}

export function DesktopIcons() {
  const isUnlocked = useWindowStore((s) => s.isUnlocked);
  const isCompact = useIsCompact();
  const [positions, setPositions] = useState<Positions | null>(null);
  const [stack, setStack] = useState<string[]>(() => ITEMS.map((i) => i.id));

  useEffect(() => {
    setPositions(loadPositions());
  }, []);

  const updatePosition = useCallback(
    (id: string, pos: { x: number; y: number }) => {
      setPositions((prev) => {
        if (!prev) return prev;
        const next = { ...prev, [id]: pos };
        savePositions(next);
        return next;
      });
    },
    [],
  );

  if (!isUnlocked || !positions) return null;

  if (isCompact) {
    return (
      <div className="pointer-events-none absolute inset-x-0 top-9 z-[5] px-2">
        <div className="pointer-events-auto flex gap-1 overflow-x-auto rounded-2xl border border-white/15 bg-black/25 px-2 py-2 backdrop-blur-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ITEMS.map((item) => (
            <DesktopIconButton
              key={item.id}
              item={item}
              position={{ x: 0, y: 0 }}
              zIndex={1}
              draggable={false}
              onBringFront={() => undefined}
              onMove={() => undefined}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 top-8 z-[5]">
      {ITEMS.map((item) => (
        <DesktopIconButton
          key={item.id}
          item={item}
          position={positions[item.id] ?? { x: 16, y: 16 }}
          zIndex={10 + stack.indexOf(item.id)}
          draggable
          onBringFront={() =>
            setStack((prev) => [
              ...prev.filter((id) => id !== item.id),
              item.id,
            ])
          }
          onMove={(pos) => updatePosition(item.id, pos)}
        />
      ))}
    </div>
  );
}
