import { useEffect, useState } from "react";

function ProjectCard({ project, isActive = false }) {
  const images = project.images || [];
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const demoHref = project.demo || project.video || project.live || "#";
  const isGithubDisabled = !project.github || project.github === "#";
  const isDemoDisabled = !demoHref || demoHref === "#";

  useEffect(() => {
    setImageIndex(0);
  }, [project.title]);

  useEffect(() => {
    if (!isActive || isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setImageIndex((current) => (current + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length, isActive, isHovered]);

  return (
    <article
      className={`project-card ${isActive ? "is-active" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-media">
        {images.length > 0 ? (
          <img
            src={images[imageIndex]}
            alt={`${project.title} interface preview ${imageIndex + 1}`}
            className="project-preview-image"
            draggable="false"
          />
        ) : (
          <div className={`project-visual project-visual-${project.visual}`}>
            <span>{project.title}</span>
          </div>
        )}

        <div className="project-media-glow" />

        {project.status && (
          <span className="project-status">{project.status}</span>
        )}

        {images.length > 1 && (
          <div className="project-image-dots" aria-label="Project screenshots">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                className={index === imageIndex ? "active" : ""}
                aria-label={`Show screenshot ${index + 1}`}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="project-content">
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions project-actions-v2">
          <a
            href={project.github}
            target={isGithubDisabled ? undefined : "_blank"}
            rel={isGithubDisabled ? undefined : "noreferrer"}
            className={`project-button primary ${isGithubDisabled ? "disabled" : ""}`}
          >
            <span>GitHub</span>
          </a>

          <a
            href={demoHref}
            target={isDemoDisabled ? undefined : "_blank"}
            rel={isDemoDisabled ? undefined : "noreferrer"}
            className={`project-button secondary ${isDemoDisabled ? "disabled" : ""}`}
          >
            <span>Demo Video</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
