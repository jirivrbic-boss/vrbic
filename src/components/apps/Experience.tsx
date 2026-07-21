"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { getExperience } from "@/i18n/content";
import { useLocale, useT } from "@/i18n/useT";

export function Experience() {
  const t = useT();
  const locale = useLocale();
  const chambers = getExperience(locale);
  const [selected, setSelected] = useState<number | null>(1);
  const active = chambers.find((c) => c.id === selected) ?? null;

  return (
    <div className="flex h-full min-h-[420px] flex-col bg-[#0d0d0f] font-mono text-white">
      <div className="flex flex-wrap items-center justify-between gap-1 border-b border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#7dd3fc] sm:px-4">
        <span>Aperture Science · Career Assessment Protocol v2.7</span>
        <span className="text-orange-400">Subject ID: JV-2026</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <aside className="flex max-h-[40vh] w-full shrink-0 flex-col border-b border-white/10 md:max-h-none md:w-[280px] md:border-b-0 md:border-r">
          <p className="px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-[#38bdf8]">
            Test Chamber Selection
          </p>
          <div className="min-h-0 flex-1 space-y-2 overflow-auto px-3 pb-4">
            {chambers.map((chamber) => {
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
              {t("exp.noticeTitle")}
            </p>
            <p className="text-[10px] leading-relaxed text-white/55">
              {t("exp.noticeBody")}
            </p>
          </div>
        </aside>

        <main className="relative min-h-0 flex-1 overflow-auto p-4 sm:p-5">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={`${locale}-${active.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {t("exp.progressReport")}
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
                  className={`text-2xl font-bold tracking-tight sm:text-3xl ${
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
                    {t("exp.proficiencies")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          active.portal === "blue"
                            ? "border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#93c5fd]"
                            : "border-orange-500/40 bg-orange-500/10 text-orange-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center text-white/40">
                <div className="mb-4 text-5xl text-[#3b82f6]/40">✦</div>
                <p className="text-sm">{t("exp.selectChamber")}</p>
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
