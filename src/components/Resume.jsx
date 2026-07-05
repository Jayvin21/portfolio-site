import {
  FaDownload,
  FaFileAlt,
  FaGraduationCap,
  FaRocket,
  FaExternalLinkAlt,
  FaBrain,
  FaCode,
} from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="resume-panel reveal-card">
        <div className="resume-content">
          <p className="section-kicker">Resume</p>
          <h2>Download my resume</h2>

          <p>
            A focused snapshot of my full-stack development, AI systems,
            automation projects, education, research, leadership, and execution
            experience.
          </p>

          <div className="resume-highlights resume-highlights-v2">
            <span><FaGraduationCap /> B.E. Computer Engineering</span>
            <span><FaBrain /> AI/ML Systems Builder</span>
            <span><FaCode /> Full-Stack Product Engineering</span>
            <span><FaFileAlt /> Published Research Paper</span>
          </div>
        </div>

        <div className="resume-actions">
          <a className="resume-download" href="/Jayvin_Parmar_Resume.pdf" download>
            <FaDownload />
            Download Resume PDF
          </a>

          <a className="resume-secondary" href="#projects">
            View Projects
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
