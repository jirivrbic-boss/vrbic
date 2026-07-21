"use client";

import {
  Car,
  Gamepad2,
  GraduationCap,
  MapPin,
  Swords,
  Sparkles,
} from "lucide-react";
import { useT } from "@/i18n/useT";

const TAGS = [
  "Next.js",
  "React",
  "Firebase",
  "Tailwind CSS",
  "Vercel",
  "AI-Assisted Dev",
];

export function AboutMe() {
  const t = useT();

  const interests = [
    { icon: Gamepad2, title: t("about.i1t"), desc: t("about.i1d") },
    { icon: Swords, title: t("about.i2t"), desc: t("about.i2d") },
    { icon: Car, title: t("about.i3t"), desc: t("about.i3d") },
    { icon: MapPin, title: t("about.i4t"), desc: t("about.i4d") },
  ];

  return (
    <div className="h-full bg-gradient-to-b from-[#1c1c1e] to-[#111113] text-white">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-10 sm:py-8">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-700 text-2xl font-semibold shadow-lg ring-2 ring-white/20">
            JV
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Jiří Vrba
            </h1>
            <p className="mt-1 text-[15px] text-sky-300">{t("about.title")}</p>
          </div>
        </div>

        <p className="mt-6 text-[14px] leading-relaxed text-white/80">
          {t("about.bio")}
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
              {t("about.education")}
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-white/75">
            {[t("about.edu1"), t("about.edu2"), t("about.edu3")].map((item) => (
              <li key={item} className="flex gap-2">
                <Sparkles className="mt-0.5 size-3.5 shrink-0 text-amber-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            {t("about.interests")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {interests.map(({ icon: Icon, title, desc }) => (
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
