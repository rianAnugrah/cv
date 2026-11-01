"use client";

import { useProfile } from "@/components/providers/ProfileProvider";
import { ProjectTile } from "@/components/projects/ProjectTile";
import { StatusPanel } from "@/components/ui/StatusPanel";
import { ViewHeader } from "@/components/ui/ViewHeader";

export function ProjectsView() {
  const { profile } = useProfile();

  if (!profile) return null;

  const projects = profile.projects;

  return (
    <div className="view-column">
      <ViewHeader
        title="Projects"
        subtitle="A showcase of projects I have built."
        aside={`${projects.length} ${projects.length === 1 ? "project" : "projects"}`}
      />

      {projects.length === 0 ? (
        <StatusPanel
          title="No projects yet"
          message="Add entries to the projects array in public/data/profile.json and reload to see them here."
        />
      ) : (
        <ul className="project-grid" role="list">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectTile project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
