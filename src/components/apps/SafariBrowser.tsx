"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Lock,
  Plus,
  RotateCw,
  Share,
  Sidebar,
} from "lucide-react";
import { useWindowStore } from "@/store/windowStore";

const BLOCKED_HOST_HINTS = [
  "instagram.com",
  "faceit.com",
  "behance.net",
  "facebook.com",
  "youtube.com",
  "twitter.com",
  "x.com",
];

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^portfolio:\/\//, "");
  }
}

function likelyBlocked(url: string) {
  if (url.startsWith("portfolio://")) return true;
  const host = hostOf(url).toLowerCase();
  return BLOCKED_HOST_HINTS.some((h) => host.includes(h));
}

function parseDiscordNick(url: string) {
  if (!url.startsWith("portfolio://discord/")) return null;
  return decodeURIComponent(url.replace("portfolio://discord/", ""));
}

export function SafariBrowser() {
  const safariUrl = useWindowStore((s) => s.safariUrl);
  const safariTitle = useWindowStore((s) => s.safariTitle);
  const openSafari = useWindowStore((s) => s.openSafari);

  const [address, setAddress] = useState(safariUrl);
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);

  const blocked = useMemo(() => likelyBlocked(safariUrl), [safariUrl]);
  const host = useMemo(() => hostOf(safariUrl), [safariUrl]);
  const discordNick = useMemo(() => parseDiscordNick(safariUrl), [safariUrl]);

  useEffect(() => {
    setAddress(
      discordNick ? `discord://nickname/${discordNick}` : safariUrl,
    );
    setLoading(true);
    setShowFallback(blocked);
    setIframeKey((k) => k + 1);
    setCopied(false);

    if (blocked) {
      setLoading(false);
      return;
    }

    const t = setTimeout(() => setLoading(false), 1200);
    const fallbackTimer = setTimeout(() => setShowFallback(true), 4500);

    return () => {
      clearTimeout(t);
      clearTimeout(fallbackTimer);
    };
  }, [safariUrl, blocked, discordNick]);

  const navigate = (raw: string) => {
    let next = raw.trim();
    if (!next) return;
    if (next.startsWith("discord://")) return;
    if (!/^https?:\/\//i.test(next)) next = `https://${next}`;
    openSafari(next, hostOf(next));
  };

  const copyNick = async () => {
    if (!discordNick) return;
    try {
      await navigator.clipboard.writeText(discordNick);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Zkopíruj Discord nick:", discordNick);
    }
  };

  return (
    <div className="flex h-full flex-col bg-[#1c1c1e] text-white">
      <div className="flex shrink-0 items-center gap-2 border-b border-white/8 bg-[#2c2c2e] px-3 py-2">
        <div className="flex items-center gap-1 text-white/45">
          <button
            type="button"
            className="rounded-md p-1.5 opacity-40"
            aria-label="Zpět"
            disabled
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            className="rounded-md p-1.5 opacity-40"
            aria-label="Vpřed"
            disabled
          >
            <ArrowRight className="size-4" />
          </button>
          <Sidebar className="mx-1 hidden size-4 sm:block" />
        </div>

        <form
          className="flex min-w-0 flex-1 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(address);
          }}
        >
          <div className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-lg bg-[#1c1c1e] px-3 ring-1 ring-white/10">
            <Lock className="size-3 shrink-0 text-white/40" />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-[13px] text-white/90 outline-none placeholder:text-white/35"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => {
                setLoading(true);
                setShowFallback(blocked);
                setIframeKey((k) => k + 1);
                setTimeout(() => setLoading(false), 800);
              }}
              className="rounded p-0.5 text-white/45 hover:text-white"
              aria-label="Obnovit"
            >
              <RotateCw
                className={`size-3.5 ${loading ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-1 text-white/45">
          <button
            type="button"
            className="rounded-md p-1.5 hover:bg-white/10 hover:text-white"
            aria-label="Sdílet"
            onClick={() =>
              navigator.clipboard?.writeText(
                discordNick ? discordNick : safariUrl,
              )
            }
          >
            <Share className="size-4" />
          </button>
          <button
            type="button"
            className="rounded-md p-1.5 hover:bg-white/10 hover:text-white"
            aria-label="Nový tab"
          >
            <Plus className="size-4" />
          </button>
          {!discordNick && (
            <a
              href={safariUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1.5 hover:bg-white/10 hover:text-white"
              aria-label="Otevřít mimo Safari"
              title="Otevřít v novém okně"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 border-b border-white/5 bg-[#252528] px-3 py-1.5">
        <div className="flex max-w-full items-center gap-2 rounded-md bg-[#3a3a3c] px-3 py-1 text-[12px]">
          <span className="size-2 shrink-0 rounded-full bg-sky-400" />
          <span className="truncate text-white/85">
            {safariTitle || host}
          </span>
        </div>
      </div>

      <div className="relative min-h-0 flex-1 bg-white">
        {loading && (
          <div className="absolute inset-x-0 top-0 z-20 h-0.5 overflow-hidden bg-sky-500/20">
            <div className="h-full w-1/3 animate-pulse bg-sky-400" />
          </div>
        )}

        {!blocked && (
          <iframe
            key={iframeKey}
            src={safariUrl}
            title={safariTitle}
            className="size-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => {
              setLoading(false);
              setShowFallback(false);
            }}
          />
        )}

        {discordNick && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-[#5865F2] to-[#404EED] p-6">
            <div className="w-full max-w-md rounded-2xl bg-[#313338] p-8 text-center text-white shadow-2xl">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#5865F2] text-2xl font-bold">
                V
              </div>
              <p className="text-sm uppercase tracking-wider text-white/50">
                Discord uživatel
              </p>
              <p className="mt-2 font-mono text-3xl font-bold">{discordNick}</p>
              <button
                type="button"
                onClick={() => void copyNick()}
                className="mt-6 rounded-lg bg-[#5865F2] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#4752c4]"
              >
                {copied ? "Zkopírováno!" : "Kopírovat nick"}
              </button>
            </div>
          </div>
        )}

        {!discordNick && (blocked || showFallback) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-[#f5f5f7] to-[#e8e8ed] p-6 text-[#1d1d1f]">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl shadow-black/10 ring-1 ring-black/5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-lg font-bold text-white shadow">
                  {host.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold">{safariTitle}</p>
                  <p className="truncate text-sm text-black/45">{host}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-black/65">
                Tato stránka neumožňuje přímé vložení do Safari okna. Otevři ji
                tlačítkem níže — Safari zůstane součástí plochy.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={safariUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0a84ff] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0077ed]"
                >
                  <ExternalLink className="size-4" />
                  Otevřít {host}
                </a>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(safariUrl)}
                  className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-medium text-black/70 transition hover:bg-black/10"
                >
                  Kopírovat URL
                </button>
              </div>

              <p className="mt-5 break-all font-mono text-[11px] text-black/35">
                {safariUrl}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
