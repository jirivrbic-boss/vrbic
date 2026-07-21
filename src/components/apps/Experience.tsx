"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Chamber {
  id: number;
  role: string;
  org: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
  portal: "blue" | "orange";
  link?: { label: string; url: string };
}

const CHAMBERS: Chamber[] = [
  {
    id: 1,
    role: "Webový vývojář",
    org: "Wloom",
    location: "Digitální studio",
    period: "Současnost",
    description:
      "Full-stack programování, tvorba webových aplikací, řešení technických logů a integrace. Vývoj a nasazení klientských řešení s důrazem na rychlost, spolehlivost a moderní DX.",
    tech: ["Next.js", "Vercel", "Firebase"],
    portal: "blue",
  },
  {
    id: 2,
    role: "Main Tournament Organizer",
    org: "EsportArena",
    location: "Studentské turnaje",
    period: "Aktivní",
    description:
      "Zastřešení celé organizace studentských turnajů, komunikace s hráči, technické zajištění a správa Faceit platformy. Koordinace formátů, pravidel a průběhu celých eventů.",
    tech: ["Faceit", "Event management", "Komunikace"],
    portal: "blue",
  },
  {
    id: 3,
    role: "Organizátor LAN turnajů",
    org: "Elite Arena Karlovy Vary",
    location: "Karlovy Vary",
    period: "Aktivní",
    description:
      "Příprava, produkce a administrace živých offline herních eventů. Od logistiky přes produkci až po zajištění hladkého průběhu LAN turnajů na místě.",
    tech: ["LAN produkce", "Live eventy", "Administrace"],
    portal: "orange",
  },
  {
    id: 4,
    role: "Organizátor CS:GO turnajů",
    org: "Star League",
    location: "Česká republika",
    period: "2020 – 2022",
    description:
      "Organizace a produkce CS:GO turnajů pod hlavičkou Star League. Zajištění průběhu soutěží, komunikace s týmy a tvorba video obsahu kolem turnajové scény.",
    tech: ["CS:GO", "Turnaje", "Produkce"],
    portal: "blue",
    link: {
      label: "YouTube · Star League",
      url: "https://www.youtube.com/@starleague8132",
    },
  },
  {
    id: 5,
    role: "Organizátor CS:GO turnajů",
    org: "Enelite Cup",
    location: "Česká republika",
    period: "2022 – 2023",
    description:
      "Organizace CS:GO turnajů Enelite Cup — příprava formátu, komunikace s hráči a týmy a správa komunity kolem eventu.",
    tech: ["CS:GO", "Komunita", "Eventy"],
    portal: "orange",
    link: {
      label: "Instagram · Enelite Cup",
      url: "https://instagram.com/entelite.cup",
    },
  },
  {
    id: 6,
    role: "Grafický designer",
    org: "Herní týmy v ČR",
    location: "Česká republika",
    period: "2020 – současnost",
    description:
      "Grafický design pro herní týmy v České republice — vizuální identity, bannery, thumbnaily, motion grafika a video editing. Práce napříč Adobe Creative Suite a Sony Vegas.",
    tech: [
      "Photoshop",
      "Premiere",
      "After Effects",
      "Lightroom",
      "Media Encoder",
      "Sony Vegas 17",
    ],
    portal: "blue",
  },
  {
    id: 7,
    role: "Hráč / kapitán školního týmu",
    org: "Studentský turnaj CS2",
    location: "Česká republika",
    period: "1. – 3. ročník",
    description:
      "Dotáhl školní tým ve hře Counter-Strike 2 ve studentském turnaji: 1. ročník — 1. místo, 2. ročník — 2. místo, 3. ročník — 16. místo ze 100 škol.",
    tech: ["CS2", "Týmová hra", "1. místo", "2. místo"],
    portal: "orange",
  },
];

export function Experience() {
  const [selected, setSelected] = useState<number | null>(1);
  const active = CHAMBERS.find((c) => c.id === selected) ?? null;

  return (
    <div className="flex h-full min-h-[420px] flex-col bg-[#0d0d0f] font-mono text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#7dd3fc]">
        <span>Aperture Science · Career Assessment Protocol v2.7</span>
        <span className="text-orange-400">Subject ID: JV-2026</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <aside className="flex w-full shrink-0 flex-col border-b border-white/10 md:w-[280px] md:border-b-0 md:border-r">
          <p className="px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#38bdf8]">
            Test Chamber Selection
          </p>
          <div className="min-h-0 flex-1 space-y-2 overflow-auto px-3 pb-4">
            {CHAMBERS.map((chamber) => {
              const isActive = selected === chamber.id;
              const accent =
                chamber.portal === "blue"
                  ? "border-[#3b82f6]"
                  : "border-orange-500";
              const activeBg =
                chamber.portal === "blue"
                  ? "bg-[#1e3a5f]/70"
                  : "bg-orange-950/50";

              return (
                <button
                  key={chamber.id}
                  type="button"
                  onClick={() => setSelected(chamber.id)}
                  className={`w-full rounded-md border px-3 py-2.5 text-left transition ${accent} ${
                    isActive
                      ? `${activeBg} shadow-[0_0_12px_rgba(59,130,246,0.25)]`
                      : "border-opacity-40 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded text-[11px] font-bold ${
                        chamber.portal === "blue"
                          ? "bg-[#3b82f6]/30 text-[#7dd3fc]"
                          : "bg-orange-500/30 text-orange-300"
                      }`}
                    >
                      {String(chamber.id).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-white">
                        {chamber.role}
                      </p>
                      <p className="truncate text-[10px] text-white/45">
                        {chamber.org}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mx-3 mb-4 hidden rounded border border-orange-500/40 bg-orange-950/20 p-3 md:block">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-orange-400">
              Enrichment Center Notice
            </p>
            <p className="text-[10px] leading-relaxed text-white/55">
              Testovací komory reprezentují kariérní zkušenosti subjektu. Cake
              bude udělen po úspěšném dokončení všech komor.
            </p>
          </div>
        </aside>

        <main className="relative min-h-0 flex-1 overflow-auto p-5">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Test Subject Progress Report
                  </p>
                  <span
                    className={`rounded border px-2 py-0.5 text-[10px] ${
                      active.portal === "blue"
                        ? "border-[#3b82f6]/50 text-[#7dd3fc]"
                        : "border-orange-500/50 text-orange-300"
                    }`}
                  >
                    {active.period}
                  </span>
                </div>

                <h2
                  className={`text-3xl font-bold tracking-tight ${
                    active.portal === "blue"
                      ? "text-[#60a5fa]"
                      : "text-orange-400"
                  }`}
                >
                  Test Chamber {String(active.id).padStart(2, "0")}
                </h2>
                <p className="mt-2 text-lg font-semibold text-white">
                  {active.role}
                </p>
                <p className="text-sm text-white/50">
                  {active.org} · {active.location}
                </p>

                <div className="mt-5 rounded border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-white/75">
                  {active.description}
                </div>

                {active.link && (
                  <a
                    href={active.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-2 rounded border px-3 py-2 text-xs transition hover:bg-white/5 ${
                      active.portal === "blue"
                        ? "border-[#3b82f6]/40 text-[#93c5fd]"
                        : "border-orange-500/40 text-orange-200"
                    }`}
                  >
                    <ExternalLink className="size-3.5" />
                    {active.link.label}
                  </a>
                )}

                <div className="mt-5">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-orange-400">
                    Subject Proficiencies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          active.portal === "blue"
                            ? "border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#93c5fd]"
                            : "border-orange-500/40 bg-orange-500/10 text-orange-200"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center text-white/40">
                <div className="mb-4 text-5xl text-[#3b82f6]/40">✦</div>
                <p className="text-sm">Please Select a Test Chamber</p>
                <p className="mt-1 max-w-xs text-[11px]">
                  Aperture Science Career Development Test Chambers
                </p>
              </div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <footer className="flex items-center justify-between border-t border-white/10 px-4 py-1.5 text-[9px] uppercase tracking-wider text-white/30">
        <span>Aperture Laboratories™</span>
        <span className="hidden sm:inline">
          Test subject will be awarded cake upon completion
        </span>
        <span>v1.07.JV.OS</span>
      </footer>
    </div>
  );
}
