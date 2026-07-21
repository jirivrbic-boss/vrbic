"use client";

import { useState } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { useT } from "@/i18n/useT";

const PHONE = "+420606020284";
const PHONE_DISPLAY = "+420 606 020 284";
const EMAIL = "jiri@esportarena.cz";

export function Contact() {
  const t = useT();
  const [copied, setCopied] = useState<"phone" | "email" | null>(null);

  const copy = async (value: string, kind: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      window.prompt(t("contact.copyPhone"), value);
    }
  };

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#1c1c1e] to-[#111113] text-white">
      <div className="border-b border-white/10 bg-gradient-to-r from-violet-600/30 to-sky-600/20 px-6 py-8 text-center">
        <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-sky-500 text-xl font-semibold shadow-lg ring-2 ring-white/20">
          JV
        </div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {t("contact.title")}
        </h1>
        <p className="mt-1 text-sm text-white/60">{t("contact.subtitle")}</p>
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-auto p-4 sm:p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-sky-300">
            <Phone className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {t("contact.phone")}
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="block font-mono text-lg font-semibold tracking-tight text-white hover:text-sky-300"
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`tel:${PHONE}`}
              className="rounded-full bg-sky-500/20 px-3 py-2 text-xs font-semibold text-sky-200 transition hover:bg-sky-500/30"
            >
              {t("contact.call")}
            </a>
            <button
              type="button"
              onClick={() => void copy(PHONE, "phone")}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/15"
            >
              {copied === "phone" ? (
                <>
                  <Check className="size-3.5" />
                  {t("contact.copied")}
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  {t("contact.copyPhone")}
                </>
              )}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-violet-300">
            <Mail className="size-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {t("contact.email")}
            </span>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="block break-all font-mono text-base font-semibold tracking-tight text-white hover:text-violet-300 sm:text-lg"
          >
            {EMAIL}
          </a>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-violet-500/20 px-3 py-2 text-xs font-semibold text-violet-200 transition hover:bg-violet-500/30"
            >
              {t("contact.write")}
            </a>
            <button
              type="button"
              onClick={() => void copy(EMAIL, "email")}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/15"
            >
              {copied === "email" ? (
                <>
                  <Check className="size-3.5" />
                  {t("contact.copied")}
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  {t("contact.copyEmail")}
                </>
              )}
            </button>
          </div>
        </div>

        <p className="mt-auto pt-2 text-center text-xs leading-relaxed text-white/40">
          {t("contact.note")}
        </p>
      </div>
    </div>
  );
}
