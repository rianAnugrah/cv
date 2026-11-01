import { CodeXml } from "lucide-react";

export function SkillsTile({ skills }) {
  return (
    <section className="tile tile-dark home-skills" aria-labelledby="skills-title">
      <div className="flex items-start justify-between gap-2">
        <h2 id="skills-title" className="tile-label">
          Skills
        </h2>
        <CodeXml
          size={16}
          strokeWidth={1.8}
          className="text-metro-red"
          aria-hidden="true"
        />
      </div>

      <ul className="mt-auto flex min-h-0 flex-wrap content-end gap-x-5 gap-y-2 overflow-hidden pt-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-[13px] font-semibold leading-tight text-white/[0.85] sm:text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
