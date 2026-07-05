import { FaDownload, FaFileAlt, FaGraduationCap, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="resume-panel reveal-card">
        <div className="resume-content">
          <p className="section-kicker">Resume</p>
          <h2>Download my resume</h2>

          <p>
            A focused snapshot of my full-stack development, AI systems,
            automation projects, education, leadership, research, and technical
            achievements.
          </p>

          <div className="resume-highlights">
            <span><FaGraduationCap /> B.E. Computer Engineering</span>
            <span><FaTrophy /> Hackathon Finalist</span>
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
