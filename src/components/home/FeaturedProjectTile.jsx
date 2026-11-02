import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { inkFor } from "@/lib/colors";
import { getProjectCategory } from "@/lib/projectCategories";
import { isExternalUrl } from "@/lib/urls";

export function FeaturedProjectTile({ project, className }) {
  const hasLink = isExternalUrl(project.url);
  const summary =
    project.tech.length > 0 ? project.tech.join(", ") : project.category;
  const background = project.color ?? "#E60012";
  const ink = inkFor(background);
  const Icon = getProjectCategory(project.category).icon;
  const initial = project.name.trim().charAt(0).toUpperCase();

  const content = (
    <>
      <span className="watermark" aria-hidden="true">
        {initial}
      </span>
      <div className="tile-kicker">
        <p className="tile-label">Featured</p>
        <span className="icon-pop corner-icon" aria-hidden="true">
          {hasLink ? <ArrowUpRight size={16} /> : <ChevronRight size={16} />}
        </span>
      </div>

      <div className="mt-auto">
        <Icon
          size={18}
          strokeWidth={1.8}
          className="mb-2 opacity-80"
          aria-hidden="true"
        />
        <h2 className="poster-title">{project.name}</h2>
        <p className="tile-note mt-1.5 line-clamp-2">{summary}</p>
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a
        className={`tile tile-link tile-flip ink-pattern ${className}`}
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
    <Link
      className={`tile tile-link tile-flip ink-pattern ${className}`}
      href="/projects"
      style={{ backgroundColor: background, color: ink }}
    >
      {content}
      <span className="sr-only"> (opens the Projects view)</span>
    </Link>
  );
}
