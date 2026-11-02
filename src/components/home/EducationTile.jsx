import { GraduationCap } from "lucide-react";

export function EducationTile({ education }) {
  return (
    <section
      className="tile tile-paper home-education"
      aria-labelledby="education-title"
    >
      <div className="tile-kicker">
        <p className="tile-label">Education</p>
        <span className="corner-icon" aria-hidden="true">
          <GraduationCap size={18} strokeWidth={1.8} />
        </span>
      </div>

      <div className="mt-auto">
        <h2 id="education-title" className="poster-title">
          {education.institution}
        </h2>
        {education.program ? (
          <p className="tile-note mt-1.5">{education.program}</p>
        ) : null}
      </div>
    </section>
  );
}
