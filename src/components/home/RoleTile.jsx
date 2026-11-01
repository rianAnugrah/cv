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
      <div className="flex items-start justify-between gap-2">
        <p className="tile-label">Current role</p>
        <Briefcase
          size={18}
          strokeWidth={1.8}
          className="opacity-70"
          aria-hidden="true"
        />
      </div>

      <div className="mt-auto">
        <h2
          id="current-role-title"
          className="tile-title text-lg leading-tight sm:text-xl"
        >
          {currentRole.title}
        </h2>
        {subtitle ? <p className="tile-note mt-1.5">{subtitle}</p> : null}
      </div>
    </section>
  );
}
