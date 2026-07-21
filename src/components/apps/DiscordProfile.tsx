"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useT } from "@/i18n/useT";

const DISCORD_NICK = "vrbic.";
const AVATAR_URL =
  "https://api.dicebear.com/9.x/adventurer/svg?seed=vrbic&backgroundColor=5865f2";

export function DiscordProfile() {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const copyNick = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_NICK);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(t("discord.prompt"), DISCORD_NICK);
    }
  };

  return (
    <div className="flex h-full flex-col bg-[#1e1f22] text-white">
      <div className="h-24 bg-gradient-to-r from-[#5865F2] via-[#4752c4] to-[#3c45a5]" />

      <div className="relative flex flex-1 flex-col items-center px-6 pb-8">
        <div className="relative -mt-12 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={AVATAR_URL}
            alt={t("discord.alt")}
            className="size-24 rounded-full bg-[#5865F2] object-cover ring-[6px] ring-[#1e1f22]"
          />
          <span className="absolute right-1 bottom-1 size-5 rounded-full border-[3px] border-[#1e1f22] bg-[#23a559]" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Discord
        </p>
        <h1 className="mt-1 font-mono text-3xl font-bold tracking-tight">
          {DISCORD_NICK}
        </h1>
        <p className="mt-3 max-w-xs text-center text-sm leading-relaxed text-white/55">
          {t("discord.hint")}
        </p>

        <button
          type="button"
          onClick={() => void copyNick()}
          className={`mt-6 flex w-full max-w-xs items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            copied
              ? "bg-[#23a559] text-white"
              : "bg-[#5865F2] text-white hover:bg-[#4752c4]"
          }`}
        >
          {copied ? (
            <>
              <Check className="size-4" />
              {t("discord.copied")}
            </>
          ) : (
            <>
              <Copy className="size-4" />
              {t("discord.copy")} {DISCORD_NICK}
            </>
          )}
        </button>

        <p className="mt-4 text-center text-[11px] text-white/35">
          {t("discord.paste")}
        </p>
      </div>
    </div>
  );
}
