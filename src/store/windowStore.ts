import { create } from "zustand";

export type AppId =
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact"
  | "safari"
  | "discord";

export interface WindowMeta {
  id: AppId;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
}

interface WindowStore {
  openWindows: AppId[];
  windows: Partial<Record<AppId, WindowMeta>>;
  activeWindow: AppId | null;
  nextZIndex: number;
  isUnlocked: boolean;
  safariUrl: string;
  safariTitle: string;
  openWindow: (id: AppId) => void;
  openSafari: (url: string, title?: string) => void;
  closeWindow: (id: AppId) => void;
  minimizeWindow: (id: AppId) => void;
  restoreWindow: (id: AppId) => void;
  maximizeWindow: (id: AppId) => void;
  focusWindow: (id: AppId) => void;
  unlock: () => void;
  lock: () => void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  openWindows: [],
  windows: {},
  activeWindow: null,
  nextZIndex: 10,
  isUnlocked: false,
  safariUrl: "https://jirivrba.digital",
  safariTitle: "Safari",

  unlock: () => set({ isUnlocked: true }),

  lock: () =>
    set({
      isUnlocked: false,
      openWindows: [],
      windows: {},
      activeWindow: null,
      nextZIndex: 10,
      safariUrl: "https://jirivrba.digital",
      safariTitle: "Safari",
    }),

  openWindow: (id) => {
    const { openWindows, windows, nextZIndex } = get();
    if (openWindows.includes(id)) {
      const existing = windows[id];
      if (existing?.isMinimized) {
        set({
          windows: {
            ...windows,
            [id]: { ...existing, isMinimized: false, zIndex: nextZIndex },
          },
          activeWindow: id,
          nextZIndex: nextZIndex + 1,
        });
      } else {
        get().focusWindow(id);
      }
      return;
    }

    set({
      openWindows: [...openWindows, id],
      windows: {
        ...windows,
        [id]: {
          id,
          zIndex: nextZIndex,
          isMinimized: false,
          isMaximized: false,
        },
      },
      activeWindow: id,
      nextZIndex: nextZIndex + 1,
    });
  },

  openSafari: (url, title) => {
    set({
      safariUrl: url,
      safariTitle: title ?? "Safari",
    });
    get().openWindow("safari");
  },

  closeWindow: (id) => {
    const { openWindows, windows, activeWindow } = get();
    const remaining = openWindows.filter((w) => w !== id);
    const nextWindows = { ...windows };
    delete nextWindows[id];

    let nextActive = activeWindow;
    if (activeWindow === id) {
      const visible = remaining
        .map((wid) => nextWindows[wid])
        .filter((w): w is WindowMeta => !!w && !w.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex);
      nextActive = visible[0]?.id ?? null;
    }

    set({
      openWindows: remaining,
      windows: nextWindows,
      activeWindow: nextActive,
    });
  },

  minimizeWindow: (id) => {
    const { windows, activeWindow, openWindows } = get();
    const win = windows[id];
    if (!win) return;

    const nextWindows = {
      ...windows,
      [id]: { ...win, isMinimized: true, isMaximized: false },
    };

    let nextActive = activeWindow;
    if (activeWindow === id) {
      const visible = openWindows
        .map((wid) => nextWindows[wid])
        .filter((w): w is WindowMeta => !!w && !w.isMinimized && w.id !== id)
        .sort((a, b) => b.zIndex - a.zIndex);
      nextActive = visible[0]?.id ?? null;
    }

    set({ windows: nextWindows, activeWindow: nextActive });
  },

  restoreWindow: (id) => {
    const { windows, nextZIndex } = get();
    const win = windows[id];
    if (!win) return;
    set({
      windows: {
        ...windows,
        [id]: { ...win, isMinimized: false, zIndex: nextZIndex },
      },
      activeWindow: id,
      nextZIndex: nextZIndex + 1,
    });
  },

  maximizeWindow: (id) => {
    const { windows, nextZIndex } = get();
    const win = windows[id];
    if (!win) return;
    set({
      windows: {
        ...windows,
        [id]: {
          ...win,
          isMaximized: !win.isMaximized,
          isMinimized: false,
          zIndex: nextZIndex,
        },
      },
      activeWindow: id,
      nextZIndex: nextZIndex + 1,
    });
  },

  focusWindow: (id) => {
    const { windows, nextZIndex, activeWindow } = get();
    const win = windows[id];
    if (!win || win.isMinimized) return;
    if (activeWindow === id && win.zIndex === nextZIndex - 1) return;
    set({
      windows: {
        ...windows,
        [id]: { ...win, zIndex: nextZIndex },
      },
      activeWindow: id,
      nextZIndex: nextZIndex + 1,
    });
  },
}));
