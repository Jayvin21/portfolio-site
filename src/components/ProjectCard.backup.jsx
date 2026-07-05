function ProjectVisual({ type }) {
  return (
    <div className={`project-visual ${type}`}>
      <div className="visual-sidebar">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="visual-content">
        <div className="visual-topbar" />

        <div className="visual-grid">
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className="visual-chart">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, variant = "" }) {
  return (
    <article className={`project-card ${variant}`}>
      <ProjectVisual type={project.visual} />

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.demo} className="project-demo">
            Demo Video
          </a>
          <a href={project.github}>GitHub</a>
          <a href={project.live}>Live</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;