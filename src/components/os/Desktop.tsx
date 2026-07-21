"use client";

import { AnimatePresence } from "framer-motion";
import { useWindowStore } from "@/store/windowStore";
import { Wallpaper } from "@/components/os/Wallpaper";
import { TopBar } from "@/components/os/TopBar";
import { Dock } from "@/components/os/Dock";
import { LockScreen } from "@/components/os/LockScreen";
import { Window } from "@/components/os/Window";
import { AboutMe } from "@/components/apps/AboutMe";
import { Experience } from "@/components/apps/Experience";
import { Skills } from "@/components/apps/Skills";
import { Projects } from "@/components/apps/Projects";
import { SafariBrowser } from "@/components/apps/SafariBrowser";
import { DiscordProfile } from "@/components/apps/DiscordProfile";
import { MobileNotice } from "@/components/os/MobileNotice";
import { DesktopIcons } from "@/components/os/DesktopIcons";
import { DesktopMarquee } from "@/components/os/DesktopMarquee";

const APP_CONTENT = {
  about: <AboutMe />,
  experience: <Experience />,
  skills: <Skills />,
  projects: <Projects />,
  safari: <SafariBrowser />,
  discord: <DiscordProfile />,
} as const;

export function Desktop() {
  const openWindows = useWindowStore((s) => s.openWindows);
  const isUnlocked = useWindowStore((s) => s.isUnlocked);

  return (
    <div className="relative h-dvh w-full overflow-hidden select-none">
      <Wallpaper />
      <TopBar />
      <DesktopMarquee />
      <DesktopIcons />

      <div className="pointer-events-none absolute inset-0 top-8 bottom-0 z-[20]">
        <AnimatePresence mode="wait">
          {!isUnlocked && <LockScreen key="lock" />}
        </AnimatePresence>

        {isUnlocked &&
          openWindows.map((id) => (
            <Window key={id} id={id}>
              {APP_CONTENT[id]}
            </Window>
          ))}
      </div>

      <Dock />
      <MobileNotice />
    </div>
  );
}
