import { ArrowUpRight } from "lucide-react";
import { inkFor } from "../../lib/colors";
import { getProjectCategory } from "../../lib/projectCategories";
import { isExternalUrl, prettyUrl } from "../../lib/urls";

export function ProjectTile({ project }) {
  const category = getProjectCategory(project.category);
  const badgeColor = project.color ?? category.color;
  const ink = inkFor(badgeColor);
  const hasLink = isExternalUrl(project.url);
  const initial = project.name.trim().charAt(0).toUpperCase();

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className="text-5xl font-light leading-none sm:text-6xl"
          aria-hidden="true"
        >
          {initial}
        </span>
        {hasLink ? (
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="mt-0.5 opacity-70"
          />
        ) : null}
      </div>

      <div className="mt-auto pt-4">
        <h2 className="project-name">{project.name}</h2>

        {project.tech.length > 0 ? (
          <p className="project-tech">{project.tech.join(", ")}</p>
        ) : null}

        {project.description ? (
          <p className="project-desc">{project.description}</p>
        ) : null}

        {project.url ? (
          <p className="project-url">{prettyUrl(project.url)}</p>
        ) : null}
      </div>

      <p className="project-category">{project.category}</p>
    </>
  );

  if (hasLink) {
    return (
      <a
        className="project-tile tile-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: badgeColor, color: ink }}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <article
      className="project-tile"
      style={{ backgroundColor: badgeColor, color: ink }}
    >
      {content}
    </article>
  );
}
