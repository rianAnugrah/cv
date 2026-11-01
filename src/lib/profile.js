import { isExternalUrl } from "./urls";

const HEX_COLOR = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

const text = (value) =>
  typeof value === "string" && value.trim() !== "" ? value.trim() : null;

const textList = (value) =>
  Array.isArray(value)
    ? value
        .filter((item) => typeof item === "string" && item.trim() !== "")
        .map((item) => item.trim())
    : [];

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function normalizeProject(raw, index) {
  if (!raw || typeof raw !== "object") return null;

  const name = text(raw.name);
  if (!name) return null;

  return {
    id: text(raw.id) ?? `project-${index + 1}`,
    name,
    category: text(raw.category) ?? "Project",
    tech: textList(raw.tech),
    description: text(raw.description) ?? "",
    url: isExternalUrl(raw.url) ? raw.url.trim() : null,
    color:
      typeof raw.color === "string" && HEX_COLOR.test(raw.color)
        ? raw.color
        : null,
    featured: raw.featured === true,
  };
}

/**
 * Validates profile.json. Returns null when the file is missing the fields
 * the page cannot render without, so the UI can show its error state.
 */
export function normalizeProfile(raw) {
  if (!raw || typeof raw !== "object") return null;

  const name = text(raw.name);
  const role = text(raw.role);
  const tagline = text(raw.tagline);

  if (!name || !role || !tagline) return null;

  const educationRaw =
    raw.education && typeof raw.education === "object" ? raw.education : null;
  const institution = educationRaw ? text(educationRaw.institution) : null;
  const program = educationRaw ? text(educationRaw.program) : null;

  const roleRaw =
    raw.currentRole && typeof raw.currentRole === "object"
      ? raw.currentRole
      : null;
  const roleTitle = roleRaw ? text(roleRaw.title) : null;

  const projects = Array.isArray(raw.projects)
    ? raw.projects
        .map((project, index) => normalizeProject(project, index))
        .filter(Boolean)
    : [];

  return {
    name,
    monogram: text(raw.monogram) ?? initials(name),
    role,
    tagline,
    bio: text(raw.bio) ?? "",
    location: text(raw.location) ?? "",
    education:
      institution || program
        ? { institution: institution ?? "", program: program ?? "" }
        : null,
    currentRole: roleTitle
      ? {
          title: roleTitle,
          company: text(roleRaw.company) ?? "",
          year: text(roleRaw.year) ?? "",
        }
      : null,
    website: isExternalUrl(raw.website) ? raw.website.trim() : null,
    email: text(raw.email),
    github: isExternalUrl(raw.github) ? raw.github.trim() : null,
    linkedin: isExternalUrl(raw.linkedin) ? raw.linkedin.trim() : null,
    skills: textList(raw.skills),
    projects,
  };
}
