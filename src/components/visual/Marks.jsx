import { getProjectCategory } from "@/lib/projectCategories";

/**
 * Monogram frame used when profile.json has no avatar. Drop a real photo in
 * later by setting "avatar" to an https URL or a public/ path such as
 * "/portrait.jpg". The frame is original artwork, not a photograph.
 */
export function PortraitSlot({ monogram, avatar }) {
  return (
    <div className="portrait" aria-hidden="true">
      {avatar ? (
        <img className="portrait-img" src={avatar} alt="" />
      ) : (
        <span className="portrait-mono">{monogram}</span>
      )}
    </div>
  );
}

/** Jagged cut along the bottom of a light or red panel. */
export function TornEdge() {
  return (
    <svg
      className="torn"
      viewBox="0 0 240 16"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 8 L12 2 L22 10 L34 3 L44 12 L56 4 L66 11 L78 2 L90 10 L100 3 L112 12 L124 5 L134 11 L146 2 L158 9 L170 3 L182 12 L194 4 L206 10 L218 2 L230 8 L240 3 L240 16 L0 16 Z"
      />
    </svg>
  );
}

/**
 * Geometric stand-in for a project thumbnail. This is not a screenshot.
 * Set project.image to replace it with a real picture.
 */
export function ProjectArt({ name, category, image }) {
  const meta = getProjectCategory(category);
  const Icon = meta.icon;
  const initial = name.trim().charAt(0).toUpperCase() || "•";

  return (
    <div className="project-art" aria-hidden="true">
      {image ? (
        <img className="project-photo" src={image} alt="" />
      ) : (
        <>
          <span className="project-art-initial">{initial}</span>
          <span className="project-art-badge">
            <Icon size={26} strokeWidth={1.75} />
          </span>
          <span className="project-art-slash" />
        </>
      )}
    </div>
  );
}
