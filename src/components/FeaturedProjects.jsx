import { useEffect, useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(goNext, 4200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const getSlideClass = (index) => {
    if (index === activeIndex) return "project-slide active";

    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    const nextIndex = (activeIndex + 1) % projects.length;

    if (index === prevIndex) return "project-slide prev";
    if (index === nextIndex) return "project-slide next";

    return "project-slide hidden";
  };

  return (
    <section id="projects" className="section featured-projects">
      <div className="section-header">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2>Projects</h2>
        </div>

        <p className="projects-intro">
          Product-style full-stack and AI systems built around practical workflows,
          clean interfaces, and deployable MVP architecture.
        </p>
      </div>

      <div
        className="project-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="project-carousel-stage">
          {projects.map((project, index) => (
            <div className={getSlideClass(index)} key={project.title}>
              <ProjectCard project={project} isActive={index === activeIndex} />
            </div>
          ))}
        </div>

        <div className="project-carousel-controls">
          <button type="button" onClick={goPrev} aria-label="Previous project">
            ←
          </button>

          <div className="project-carousel-dots">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.title}
                className={index === activeIndex ? "active" : ""}
                aria-label={`Show ${project.title}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button type="button" onClick={goNext} aria-label="Next project">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
