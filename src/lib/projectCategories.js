import {
  Briefcase,
  ChartNoAxesColumn,
  FolderKanban,
  Gamepad2,
  GraduationCap,
  Layers,
  LayoutGrid,
} from "lucide-react";

const DEFAULT_CATEGORY = {
  color: "#e60012",
  icon: FolderKanban,
};

export const PROJECT_CATEGORIES = {
  Works: { color: "#e60012", icon: Layers },
  "Web Apps": { color: "#a8000d", icon: LayoutGrid },
  Education: { color: "#f2f2f2", icon: GraduationCap },
  Business: { color: "#181818", icon: Briefcase },
  "AI & Data": { color: "#e60012", icon: ChartNoAxesColumn },
  Games: { color: "#a8000d", icon: Gamepad2 },
};

export function getProjectCategory(name) {
  return PROJECT_CATEGORIES[name] ?? DEFAULT_CATEGORY;
}
