import { ArrowUpRight, Globe } from "lucide-react";
import { hostOf } from "@/lib/urls";

export function SiteTile({ website }) {
  const host = hostOf(website);

  return (
    <a
      className="tile tile-dark tile-link tile-flip home-site"
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${host} in a new tab`}
    >
      <div className="tile-kicker">
        <p className="tile-label">Website</p>
        <span className="corner-icon" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="mt-auto">
        <span className="icon-pop site-globe" aria-hidden="true">
          <Globe size={28} strokeWidth={1.6} />
        </span>
        <p className="tile-title site-host">{host}</p>
        <p className="tile-note mt-1">Personal website</p>
      </div>
    </a>
  );
}
