import { FolderKanban, Github, Grid3x3, House, Mail } from "lucide-react";

export const PRIMARY_NAV = [
  { type: "view", href: "/", label: "Home", icon: House },
  { type: "view", href: "/projects", label: "Projects", icon: FolderKanban },
  { type: "view", href: "/apps", label: "Apps", icon: Grid3x3 },
  { type: "github", label: "GitHub", icon: Github },
  { type: "view", href: "/contact", label: "Contact", icon: Mail },
];

export const VIEW_META = {
  "/": { title: "Home" },
  "/projects": { title: "Projects" },
  "/apps": { title: "Apps" },
  "/contact": { title: "Contact" },
};
