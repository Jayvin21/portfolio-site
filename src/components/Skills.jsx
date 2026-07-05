import { skillGroups } from "../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header skills-header">
        <div>
          <p className="section-kicker">Technical Stack</p>
          <h2>Skills</h2>
        </div>

        <p className="skills-intro">
          Full-stack development, AI workflows, data systems, automation, and
          core computer engineering fundamentals.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span className="skill-chip" key={skill.name}>
                    {Icon && <Icon className="skill-icon" aria-hidden="true" />}
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
