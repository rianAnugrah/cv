import { ArrowUpRight } from "lucide-react";
import { ProjectArt } from "@/components/visual/Marks";
import { inkFor } from "@/lib/colors";
import { getProjectCategory } from "@/lib/projectCategories";
import { isExternalUrl, prettyUrl } from "@/lib/urls";

export function ProjectTile({ project }) {
  const category = getProjectCategory(project.category);
  const badgeColor = project.color ?? category.color;
  const ink = inkFor(badgeColor);
  const hasLink = isExternalUrl(project.url);
  const lightSurface = ink === "#111111";

  const content = (
    <>
      <ProjectArt
        name={project.name}
        category={project.category}
        image={project.image}
      />

      <div className={`project-copy ${project.image ? "project-copy-photo" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <p className={lightSurface ? "stamp stamp-red" : "stamp stamp-paper"}>
            <span>{project.category}</span>
          </p>
          {hasLink ? (
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="mt-0.5 shrink-0 opacity-80"
            />
          ) : null}
        </div>

        <div className="mt-auto pt-6">
          <h2 className="project-name">{project.name}</h2>

          {project.tech.length > 0 ? (
            <p className="project-tech">{project.tech.join(" · ")}</p>
          ) : null}

          {project.description ? (
            <p className="project-desc">{project.description}</p>
          ) : null}

          {project.url ? <p className="project-url">{prettyUrl(project.url)}</p> : null}
        </div>
      </div>
    </>
  );

  const className = `project-tile tile-flip ink-pattern${
    project.image ? " has-photo" : ""
  }`;
  const style = { backgroundColor: badgeColor, color: ink };

  if (hasLink) {
    return (
      <a
        className={className}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <article className={className} style={style}>
      {content}
    </article>
  );
}
