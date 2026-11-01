import {
  FolderKanban,
  Github,
  Grid3x3,
  House,
  Mail,
} from "lucide-react";

export const VIEW_ORDER = ["home", "projects", "apps", "contact"];

export const VIEW_META = {
  home: { title: "Home" },
  projects: { title: "Projects" },
  apps: { title: "Apps" },
  contact: { title: "Contact" },
};

export const PRIMARY_NAV = [
  { type: "view", view: "home", label: "Home", icon: House },
  { type: "view", view: "projects", label: "Projects", icon: FolderKanban },
  { type: "view", view: "apps", label: "Apps", icon: Grid3x3 },
  { type: "github", label: "GitHub", icon: Github },
  { type: "view", view: "contact", label: "Contact", icon: Mail },
];
