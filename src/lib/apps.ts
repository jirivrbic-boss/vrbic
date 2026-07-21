import type { AppId } from "@/store/windowStore";

export interface AppDefinition {
  id: AppId;
  title: string;
  label: string;
  defaultSize: { width: number; height: number };
  accent: string;
  showInDock?: boolean;
}

export const APPS: AppDefinition[] = [
  {
    id: "about",
    title: "O mně",
    label: "O mně",
    defaultSize: { width: 720, height: 560 },
    accent: "#3b82f6",
    showInDock: true,
  },
  {
    id: "experience",
    title: "Zkušenosti",
    label: "Zkušenosti",
    defaultSize: { width: 900, height: 620 },
    accent: "#f97316",
    showInDock: true,
  },
  {
    id: "skills",
    title: "Dovednosti",
    label: "Dovednosti",
    defaultSize: { width: 880, height: 640 },
    accent: "#22c55e",
    showInDock: true,
  },
  {
    id: "projects",
    title: "Projekty",
    label: "Projekty",
    defaultSize: { width: 860, height: 580 },
    accent: "#22d3ee",
    showInDock: true,
  },
  {
    id: "safari",
    title: "Safari",
    label: "Safari",
    defaultSize: { width: 980, height: 680 },
    accent: "#0a84ff",
    showInDock: true,
  },
  {
    id: "discord",
    title: "Discord",
    label: "Discord",
    defaultSize: { width: 380, height: 420 },
    accent: "#5865F2",
    showInDock: false,
  },
];

export const DOCK_APPS = APPS.filter((a) => a.showInDock !== false);

export function getApp(id: AppId): AppDefinition {
  return APPS.find((a) => a.id === id)!;
}
