"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  url: string;
  tech: string[];
  color: string;
  glow: string;
}

const PROJECTS: Project[] = [
  {
    id: "bulldogo",
    name: "Bulldogo.cz",
    subtitle: "Platforma pro inzerci služeb",
    description:
      "Webová aplikace propojující zákazníky s poskytovateli služeb. Inzertní platforma s moderním UI a důrazem na přehledné propojení nabídky a poptávky.",
    url: "https://bulldogo.cz",
    tech: ["Next.js", "React", "Vercel"],
    color: "#f97316",
    glow: "rgba(249,115,22,0.55)",
  },
  {
    id: "elite-arena",
    name: "Elite Arena Turnaje",
    subtitle: "turnaj.elite-arena.cz",
    description:
      "Landing a registrační systém pro LAN turnaje CS2 i EA Sports FC v Elite Game Arena Karlovy Vary. Kalendář turnajů, přihlášky a prezentace herního setupu.",
    url: "https://turnaj.elite-arena.cz",
    tech: ["Next.js", "Event System", "CS2"],
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.55)",
  },
  {
    id: "pension-sunset",
    name: "Pension Sunset",
    subtitle: "pensionsunset.com · Mezirolí",
    description:
      "Prezentační web penzionu u Karlových Varů — pokoje, wellness, okolí a rezervace. Klidný design laděný k atmosféře Feng Shui ubytování.",
    url: "https://pensionsunset.com",
    tech: ["Next.js", "Booking", "Vercel"],
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.55)",
  },
  {
    id: "podlahy",
    name: "Podlahy Cheb",
    subtitle: "podlahycheb.cz",
    description:
      "Produktový katalog a firemní prezentace prodejce podlah. Přehledný výběr sortimentu s důrazem na elegantní produktové stránky.",
    url: "https://podlahycheb.cz",
    tech: ["Next.js", "Katalog", "Tailwind"],
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.55)",
  },
  {
    id: "ejdry",
    name: "Ejdry.cz",
    subtitle: "Firemní prezentace",
    description:
      "Profesionální firemní web s čistou strukturou a moderním vizuálem. Prezentace služeb a kontaktů pro B2B i koncové zákazníky.",
    url: "https://ejdry.cz",
    tech: ["Next.js", "SEO", "Vercel"],
    color: "#34d399",
    glow: "rgba(52,211,153,0.55)",
  },
  {
    id: "extroworld",
    name: "Extroworld",
    subtitle: "extroworld.com · Streetwear",
    description:
      "Kreativní e-commerce prezentace streetwear značky Extroworld — dropy, shop a budování komunity kolem unikátního a kontroverzního stylu.",
    url: "https://extroworld.com",
    tech: ["Next.js", "E-commerce", "Design"],
    color: "#fb7185",
    glow: "rgba(251,113,133,0.55)",
  },
  {
    id: "raj-mazlicku",
    name: "Ráj mazlíčků",
    subtitle: "Chovatelské potřeby · Karlovarsko",
    description:
      "Kompletní web rodinné firmy — pobočky, AkvaTera trhy, věrnostní program Smečka, fotogalerie, aktuality, FAQ a kontakt. Nasazeno na Vercel.",
    url: "https://rajmazlicku.vercel.app",
    tech: ["Next.js", "Firebase", "Vercel"],
    color: "#4ade80",
    glow: "rgba(74,222,128,0.55)",
  },
  {
    id: "uctarna",
    name: "Účtárna",
    subtitle: "uctarna.fun · Prodejní systém",
    description:
      "Moderní profesionální prodejní / účetní systém s důrazem na přehlednost a rychlou orientaci. Interní firemní nástroj pro každodenní provoz.",
    url: "https://www.uctarna.fun",
    tech: ["Next.js", "Firebase", "Full-stack"],
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.55)",
  },
  {
    id: "wloom",
    name: "Wloom Studio",
    subtitle: "wloom-seven.vercel.app",
    description:
      "Prezentační web digitálního studia Wloom — služby, portfolio projektů a kontakt. Vizuální identita „S námi rozkvetete online“.",
    url: "https://wloom-seven.vercel.app",
    tech: ["Next.js", "3D / Motion", "Vercel"],
    color: "#e879f9",
    glow: "rgba(232,121,249,0.55)",
  },
  {
    id: "esportarena",
    name: "EsportArena TSV",
    subtitle: "Studentský turnaj · Sezóna 4",
    description:
      "Web studentského esport turnaje EsportArena TSV — sezónní prezentace, informace o turnaji a registrace pro hráče.",
    url: "https://esportarena-tsv.vercel.app",
    tech: ["Next.js", "Esport", "Vercel"],
    color: "#818cf8",
    glow: "rgba(129,140,248,0.55)",
  },
];

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.4) }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-black/40 p-3 text-left transition"
      style={{
        borderColor: `${project.color}55`,
        boxShadow: `0 0 0 0 transparent`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 24px ${project.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
      }}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div
          className="relative flex size-10 shrink-0 items-center justify-center"
          aria-hidden
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed opacity-50"
            style={{ borderColor: project.color }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <div
            className="size-4 rotate-45"
            style={{
              background: `linear-gradient(135deg, ${project.color}, transparent)`,
              boxShadow: `0 0 12px ${project.glow}`,
            }}
          />
        </div>
        <span
          className="rounded border px-1.5 py-0.5 text-[9px] uppercase tracking-wider opacity-70"
          style={{ borderColor: `${project.color}66`, color: project.color }}
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p
        className="text-sm font-bold leading-tight"
        style={{ color: project.color, textShadow: `0 0 10px ${project.glow}` }}
      >
        {project.name}
      </p>
      <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-white/45">
        {project.subtitle}
      </p>
    </motion.button>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#050508] font-mono text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(600px) rotateX(60deg) translateY(35%)",
          transformOrigin: "center top",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/80" />

      <div className="relative z-10 flex items-end justify-between gap-3 px-5 pt-5">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight text-cyan-300 sm:text-3xl"
            style={{ textShadow: "0 0 18px rgba(34,211,238,0.7)" }}
          >
            PROJECT_MINTY::
          </h2>
          <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-fuchsia-400/80">
            [Portfolio_System_v3.0] · {PROJECTS.length} nodes
          </p>
        </div>
      </div>

      <div className="relative z-10 min-h-0 flex-1 overflow-auto px-4 py-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <p className="relative z-10 pb-3 text-center text-[10px] uppercase tracking-wider text-white/30">
        Klikni na uzel pro detail a odkaz
      </p>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md overflow-hidden rounded-xl border border-cyan-400/40 bg-[#0a0a12]/95 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              <div className="flex items-center justify-between border-b border-cyan-400/20 px-4 py-3">
                <h3
                  className="text-sm font-bold"
                  style={{ color: selected.color }}
                >
                  {selected.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded p-1 text-white/50 transition hover:bg-white/10 hover:text-white"
                  aria-label="Zavřít"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="px-4 py-4">
                <p className="text-[11px] uppercase tracking-wider text-fuchsia-300/80">
                  {selected.subtitle}
                </p>
                <p className="mt-1 break-all text-[10px] text-cyan-400/70">
                  {selected.url}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  <span className="text-cyan-400">OVERVIEW_</span>
                  <br />
                  {selected.description}
                </p>

                <p className="mt-4 text-[10px] uppercase tracking-wider text-white/40">
                  Tech_Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-cyan-400/30 bg-cyan-400/5 px-2 py-1 text-[11px] text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded border border-cyan-400/50 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition hover:bg-cyan-400/10"
                  >
                    <ExternalLink className="size-3.5" />
                    View_Project
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="rounded border border-fuchsia-400/40 px-4 py-2 text-xs uppercase tracking-wider text-fuchsia-300 transition hover:bg-fuchsia-400/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
