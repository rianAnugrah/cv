import {
  Atom,
  BookOpen,
  Briefcase,
  ChartNoAxesColumn,
  CircleCheck,
  CodeXml,
  Figma,
  FileCode2,
  Gauge,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Package,
  Palette,
  Server,
  Shapes,
  ShoppingBag,
  Wind,
} from "lucide-react";

/**
 * Explicit registry for icon names used in apps.json. Only these names are
 * resolved; anything else falls back to Globe. There is no dynamic import.
 */
const APP_ICONS = {
  atom: Atom,
  "book-open": BookOpen,
  "chart": ChartNoAxesColumn,
  "check-circle": CircleCheck,
  "code": CodeXml,
  "figma": Figma,
  "file-code": FileCode2,
  "gauge": Gauge,
  "github": Github,
  "globe": Globe,
  "graduation-cap": GraduationCap,
  "layers": Layers,
  "linkedin": Linkedin,
  "mail": Mail,
  "map": Map,
  "map-pin": MapPin,
  "package": Package,
  "palette": Palette,
  "server": Server,
  "shapes": Shapes,
  "shopping-bag": ShoppingBag,
  "briefcase": Briefcase,
  "wind": Wind,
};

const FALLBACK_ICON = Globe;

export function getAppIcon(name) {
  return APP_ICONS[name] ?? FALLBACK_ICON;
}

export const APP_ICON_NAMES = Object.keys(APP_ICONS);
