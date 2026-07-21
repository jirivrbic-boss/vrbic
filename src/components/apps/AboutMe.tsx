"use client";

import {
  Car,
  Gamepad2,
  GraduationCap,
  MapPin,
  Swords,
  Sparkles,
} from "lucide-react";

const TAGS = [
  "Next.js",
  "React",
  "Firebase",
  "Tailwind CSS",
  "Vercel",
  "AI-Assisted Dev",
];

const INTERESTS = [
  {
    icon: Gamepad2,
    title: "Counter-Strike 2",
    desc: "Kompetitivní hraní",
  },
  {
    icon: Swords,
    title: "Karate",
    desc: "Bojová umění",
  },
  {
    icon: Car,
    title: "Škoda Octavia 1",
    desc: "1.9 TDI — renovace",
  },
  {
    icon: MapPin,
    title: "Cestování",
    desc: "Interrail dobrodružství",
  },
];

export function AboutMe() {
  return (
    <div className="h-full bg-gradient-to-b from-[#1c1c1e] to-[#111113] text-white">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:px-10">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-700 text-2xl font-semibold shadow-lg ring-2 ring-white/20">
            JV
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Jiří Vrba
            </h1>
            <p className="mt-1 text-[15px] text-sky-300">
              Full-stack Web Developer & Esport Event Organizer
            </p>
          </div>
        </div>

        <p className="mt-6 text-[14px] leading-relaxed text-white/80">
          Programátor a vývojář webových aplikací pro digitální studio Wloom s
          obrovskou vášní pro esport. Při psaní kódu a vývoji softwaru aktivně a
          naplno využívám AI nástroje, díky čemuž pracuji mnohem rychleji a
          efektivněji. Kromě vývoje buduji herní komunitu a zajišťuji chod
          velkých turnajů pod hlavičkou EsportArena a Elite Arena Karlovy Vary.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-3 flex items-center gap-2 text-sky-300">
            <GraduationCap className="size-4" />
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Vzdělání & certifikace
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex gap-2">
              <Sparkles className="mt-0.5 size-3.5 shrink-0 text-amber-300" />
              Čerstvý absolvent střední školy
            </li>
            <li className="flex gap-2">
              <Sparkles className="mt-0.5 size-3.5 shrink-0 text-amber-300" />
              Cambridge English B2 certifikát
            </li>
            <li className="flex gap-2">
              <Sparkles className="mt-0.5 size-3.5 shrink-0 text-amber-300" />
              Němčina na úrovni A2
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            Zájmy
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {INTERESTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300">
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-8 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Jiří Vrba
        </p>
      </div>
    </div>
  );
}
