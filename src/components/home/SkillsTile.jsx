import { getSkillIcon } from "@/lib/skillIcons";

export function SkillsTile({ skills }) {
  return (
    <section className="tile tile-dark home-skills" aria-labelledby="skills-title">
      <div className="tile-kicker">
        <h2 id="skills-title" className="tile-label">
          Skills
        </h2>
      </div>

      <ul className="skill-list">
        {skills.map((skill) => {
          const Icon = getSkillIcon(skill);

          return (
            <li key={skill} className="skill-chip">
              <Icon size={13} strokeWidth={2.25} aria-hidden="true" />
              <span>{skill}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
