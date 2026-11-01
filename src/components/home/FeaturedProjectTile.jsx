import { ArrowUpRight, ChevronRight } from "lucide-react";
import { inkFor } from "../../lib/colors";
import { isExternalUrl } from "../../lib/urls";

export function FeaturedProjectTile({ project, className, onNavigate }) {
  const hasLink = isExternalUrl(project.url);
  const summary = project.tech.length > 0 ? project.tech.join(", ") : project.category;
  const background = project.color ?? "#E60012";
  const ink = inkFor(background);

  const content = (
    <>
      <div className="flex items-start justify-between gap-2">
        <p className="tile-label">Featured</p>
        {hasLink ? (
          <ArrowUpRight size={17} aria-hidden="true" className="opacity-80" />
        ) : (
          <ChevronRight size={17} aria-hidden="true" className="opacity-80" />
        )}
      </div>

      <div className="mt-auto">
        <h2 className="tile-title">{project.name}</h2>
        <p className="tile-note mt-1.5 line-clamp-2">{summary}</p>
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a
        className={`tile tile-link ${className}`}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: background, color: ink }}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`tile tile-link ${className}`}
      onClick={() => onNavigate("projects")}
      style={{ backgroundColor: background, color: ink }}
    >
      {content}
      <span className="sr-only"> (opens the Projects view)</span>
    </button>
  );
}
