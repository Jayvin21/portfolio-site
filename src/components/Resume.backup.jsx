function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-card">
        <div>
          <p className="section-kicker">Resume</p>
          <h2>Download my resume</h2>
          <p>Explore my experience, projects, and technical skills in detail.</p>
        </div>

        <a href="/resume.pdf" className="btn btn-primary" download>
          Download Resume PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;