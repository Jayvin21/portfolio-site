import { useEffect, useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(1);
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

    const interval = setInterval(goNext, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardPosition = (index) => {
    if (index === activeIndex) return "active";

    const leftIndex =
      activeIndex === 0 ? projects.length - 1 : activeIndex - 1;

    if (index === leftIndex) return "side left";

    return "side right";
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="carousel-controls">
          <button type="button" onClick={goPrev} aria-label="Previous project">
            ‹
          </button>
          <button type="button" onClick={goNext} aria-label="Next project">
            ›
          </button>
        </div>
      </div>

      <div
        className="project-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            variant={getCardPosition(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;