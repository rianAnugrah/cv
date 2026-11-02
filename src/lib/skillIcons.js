import {
  Atom,
  Braces,
  Cloud,
  CodeXml,
  Database,
  Figma,
  Github,
  Hexagon,
  Image,
  Layers,
  Palette,
  PenTool,
  Server,
  Triangle,
  Wind,
  Zap,
} from "lucide-react";

/**
 * Known skill labels from profile.json map to Lucide icons. Anything else
 * uses a neutral mark so a new skill still renders without a code change.
 */
const SKILL_ICONS = {
  "next.js": Layers,
  react: Atom,
  "tailwind css": Wind,
  html: CodeXml,
  css: Palette,
  mongodb: Database,
  javascript: Braces,
  "node.js": Server,
  mysql: Database,
  figma: Figma,
  photoshop: Image,
  express: Zap,
  illustrator: PenTool,
  vercel: Triangle,
  netlify: Cloud,
  github: Github,
};

export function getSkillIcon(skill) {
  const key = String(skill).trim().toLowerCase();
  return SKILL_ICONS[key] ?? Hexagon;
}
