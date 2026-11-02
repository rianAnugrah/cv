import { Briefcase } from "lucide-react";

export function RoleTile({ currentRole }) {
  const subtitle = [currentRole.company, currentRole.year]
    .filter(Boolean)
    .join(", ");

  return (
    <section
      className="tile tile-red-deep home-side"
      aria-labelledby="current-role-title"
    >
      <div className="tile-kicker">
        <p className="tile-label">Current role</p>
        <span className="corner-icon" aria-hidden="true">
          <Briefcase size={16} strokeWidth={1.8} />
        </span>
      </div>

      <div className="mt-auto">
        <h2 id="current-role-title" className="poster-title">
          {currentRole.title}
        </h2>
        {subtitle ? <p className="tile-note mt-1.5">{subtitle}</p> : null}
      </div>
    </section>
  );
}
