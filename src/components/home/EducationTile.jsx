import { GraduationCap } from "lucide-react";

export function EducationTile({ education }) {
  return (
    <section
      className="tile tile-paper home-education"
      aria-labelledby="education-title"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="tile-label">Education</p>
        <GraduationCap
          size={20}
          strokeWidth={1.8}
          className="text-metro-red"
          aria-hidden="true"
        />
      </div>

      <div className="mt-auto">
        <h2
          id="education-title"
          className="tile-title text-lg leading-tight sm:text-xl"
        >
          {education.institution}
        </h2>
        {education.program ? (
          <p className="tile-note mt-1.5">{education.program}</p>
        ) : null}
      </div>
    </section>
  );
}
