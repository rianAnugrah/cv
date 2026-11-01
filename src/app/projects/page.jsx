import { ProjectsView } from "@/views/ProjectsView";

export const metadata = {
  title: "Projects",
  description:
    "Selected works by Rian Anugrah, from web applications to client websites.",
  alternates: {
    canonical: "projects/",
  },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
