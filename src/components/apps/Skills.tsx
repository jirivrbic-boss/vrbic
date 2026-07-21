"use client";

import { useEffect, useState } from "react";

type Status = "OPTIMAL" | "NOMINAL" | "STABLE" | "FUNCTIONAL" | "ADEQUATE";
type Tone = "green" | "orange";

interface Skill {
  name: string;
  level: number;
  status: Status;
  rank: string;
  tone: Tone;
}

interface Category {
  id: string;
  label: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    id: "dev",
    label: "Vývoj",
    skills: [
      {
        name: "Next.js",
        level: 90,
        status: "OPTIMAL",
        rank: "ADVANCED RESEARCHER",
        tone: "green",
      },
      {
        name: "React",
        level: 88,
        status: "STABLE",
        rank: "HAZARDOUS ENVIRONMENT SPECIALIST",
        tone: "orange",
      },
      {
        name: "Firebase",
        level: 82,
        status: "NOMINAL",
        rank: "QUALIFIED TECHNICIAN",
        tone: "green",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        status: "OPTIMAL",
        rank: "ADVANCED RESEARCHER",
        tone: "green",
      },
      {
        name: "Vercel",
        level: 85,
        status: "NOMINAL",
        rank: "QUALIFIED TECHNICIAN",
        tone: "green",
      },
      {
        name: "AI-Assisted Programming",
        level: 92,
        status: "OPTIMAL",
        rank: "HAZARDOUS ENVIRONMENT SPECIALIST",
        tone: "orange",
      },
    ],
  },
  {
    id: "infra",
    label: "Infrastruktura",
    skills: [
      {
        name: "Správa serverů",
        level: 75,
        status: "FUNCTIONAL",
        rank: "QUALIFIED TECHNICIAN",
        tone: "orange",
      },
      {
        name: "DNS proxy",
        level: 78,
        status: "NOMINAL",
        rank: "ADVANCED RESEARCHER",
        tone: "green",
      },
      {
        name: "Domény",
        level: 85,
        status: "STABLE",
        rank: "QUALIFIED TECHNICIAN",
        tone: "orange",
      },
    ],
  },
  {
    id: "mgmt",
    label: "Management",
    skills: [
      {
        name: "Event management",
        level: 90,
        status: "OPTIMAL",
        rank: "HAZARDOUS ENVIRONMENT SPECIALIST",
        tone: "green",
      },
      {
        name: "Faceit admin",
        level: 88,
        status: "NOMINAL",
        rank: "ADVANCED RESEARCHER",
        tone: "green",
      },
      {
        name: "Tvorba herních struktur",
        level: 85,
        status: "STABLE",
        rank: "QUALIFIED TECHNICIAN",
        tone: "orange",
      },
      {
        name: "Produkce live eventů",
        level: 87,
        status: "NOMINAL",
        rank: "HAZARDOUS ENVIRONMENT SPECIALIST",
        tone: "green",
      },
    ],
  },
  {
    id: "design",
    label: "Design & Video",
    skills: [
      {
        name: "Adobe Photoshop",
        level: 88,
        status: "OPTIMAL",
        rank: "VISUAL SPECIALIST",
        tone: "green",
      },
      {
        name: "Adobe Premiere",
        level: 85,
        status: "NOMINAL",
        rank: "MOTION OPERATIVE",
        tone: "green",
      },
      {
        name: "Adobe After Effects",
        level: 80,
        status: "STABLE",
        rank: "MOTION OPERATIVE",
        tone: "orange",
      },
      {
        name: "Adobe Lightroom",
        level: 78,
        status: "NOMINAL",
        rank: "QUALIFIED TECHNICIAN",
        tone: "green",
      },
      {
        name: "Adobe Media Encoder",
        level: 82,
        status: "STABLE",
        rank: "QUALIFIED TECHNICIAN",
        tone: "orange",
      },
      {
        name: "Sony Vegas 17",
        level: 80,
        status: "NOMINAL",
        rank: "MOTION OPERATIVE",
        tone: "green",
      },
    ],
  },
  {
    id: "lang",
    label: "Jazyky",
    skills: [
      {
        name: "Angličtina (Cambridge B2)",
        level: 80,
        status: "NOMINAL",
        rank: "CERTIFIED OPERATIVE",
        tone: "green",
      },
      {
        name: "Němčina (A2)",
        level: 45,
        status: "ADEQUATE",
        rank: "TRAINEE OPERATIVE",
        tone: "orange",
      },
      {
        name: "Čeština (Rodilý mluvčí)",
        level: 100,
        status: "OPTIMAL",
        rank: "NATIVE PROTOCOL",
        tone: "green",
      },
    ],
  },
];

const STATUS_STYLE: Record<Status, string> = {
  OPTIMAL: "border-emerald-400/60 bg-emerald-500/15 text-emerald-300",
  NOMINAL: "border-lime-400/60 bg-lime-500/15 text-lime-300",
  STABLE: "border-orange-400/60 bg-orange-500/15 text-orange-300",
  FUNCTIONAL: "border-amber-400/60 bg-amber-500/15 text-amber-300",
  ADEQUATE: "border-yellow-400/60 bg-yellow-500/15 text-yellow-300",
};

function SegmentedBar({ level, tone }: { level: number; tone: Tone }) {
  const segments = 20;
  const filled = Math.round((level / 100) * segments);
  const color = tone === "green" ? "bg-lime-400" : "bg-orange-500";

  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 flex-1 rounded-[1px] ${
            i < filled ? color : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="rounded border border-white/8 bg-black/25 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`size-2.5 rounded-sm ${
              skill.tone === "green" ? "bg-lime-400" : "bg-orange-500"
            }`}
          />
          <span className="text-sm font-semibold text-white">{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`rounded border px-1.5 py-0.5 text-[9px] font-bold tracking-wider ${STATUS_STYLE[skill.status]}`}
          >
            {skill.status}
          </span>
          <span className="text-xs tabular-nums text-white/60">{skill.level}%</span>
        </div>
      </div>
      <SegmentedBar level={skill.level} tone={skill.tone} />
      <div className="mt-1.5 flex justify-between text-[9px] uppercase tracking-wider text-white/35">
        <span>Proficiency Level</span>
        <span>{skill.rank}</span>
      </div>
    </div>
  );
}

export function Skills() {
  const [tab, setTab] = useState("dev");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("cs-CZ", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const active = CATEGORIES.find((c) => c.id === tab) ?? CATEGORIES[0];
  const overall = Math.round(
    CATEGORIES.flatMap((c) => c.skills).reduce((a, s) => a + s.level, 0) /
      CATEGORIES.flatMap((c) => c.skills).length,
  );

  return (
    <div className="flex h-full flex-col bg-[#141416] font-mono text-white">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-orange-500/30 bg-[#1a1a1c] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded bg-orange-500 text-xl font-black text-black">
            λ
          </div>
          <div>
            <p className="text-sm font-bold tracking-wide text-orange-400">
              BLACK MESA
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-lime-400">
              Skill Assessment Protocol
            </p>
          </div>
        </div>
        <div className="rounded border border-lime-400/50 px-3 py-1.5 text-[10px] uppercase leading-tight tracking-wider text-lime-300">
          <div>Security Clearance: Level 5</div>
          <div className="text-lime-400/70">Administrator Access Granted</div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3 border-b border-white/10 px-4 py-3 sm:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="relative flex size-14 items-center justify-center rounded-full border-2 border-orange-500">
            <span className="text-lg font-bold text-orange-400">{overall}</span>
          </div>
          <div className="text-[10px] uppercase tracking-wider">
            <p className="text-white/40">Proficiency Assessment</p>
            <p className="text-orange-300">Overall Capability: {overall}%</p>
          </div>
        </div>
        <div>
          <p className="mb-1 text-[10px] uppercase tracking-wider text-white/40">
            Hazard Readiness Level
          </p>
          <div className="h-3 overflow-hidden rounded-sm bg-white/10">
            <div
              className="h-full bg-lime-400"
              style={{ width: `${overall}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2 animate-pulse rounded-full bg-lime-400" />
          <div className="text-[10px] uppercase tracking-wider">
            <p className="text-lime-300">All Systems Operational</p>
            <p className="text-white/35">Last Update: {clock}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 overflow-x-auto border-b border-white/10 px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setTab(cat.id)}
            className={`shrink-0 rounded border px-3 py-2 text-[10px] uppercase tracking-wider transition sm:py-1.5 ${
              tab === cat.id
                ? "border-orange-500 bg-orange-500/15 text-orange-300"
                : "border-white/15 text-white/50 hover:border-orange-500/40 hover:text-white/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-sm bg-orange-500 text-[11px] font-black text-black">
            λ
          </span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-lime-400">
            {active.label}
          </h3>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {active.skills.map((skill) => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <footer className="border-t border-orange-500/30 px-4 py-2 text-center text-[9px] uppercase tracking-wider text-orange-400/80">
        Warning: Unauthorized access to this system is a violation of Black Mesa
        security protocols. Property of Black Mesa Research Facility —
        Confidential.
      </footer>
    </div>
  );
}
