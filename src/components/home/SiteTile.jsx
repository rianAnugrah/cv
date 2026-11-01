import { ArrowUpRight, Globe } from "lucide-react";
import { hostOf } from "../../lib/urls";

export function SiteTile({ website }) {
  const host = hostOf(website);

  return (
    <a
      className="tile tile-dark tile-link home-site"
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${host} in a new tab`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="tile-label">Website</p>
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="text-metro-red"
        />
      </div>

      <div className="mt-auto">
        <Globe
          size={26}
          strokeWidth={1.6}
          className="mb-3 text-metro-red"
          aria-hidden="true"
        />
        <p className="tile-title break-all">{host}</p>
        <p className="tile-note mt-1">Personal website</p>
      </div>
    </a>
  );
}
