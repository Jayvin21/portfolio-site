import {
  FaBrain,
  FaCode,
  FaGraduationCap,
  FaUsers,
  FaTrophy,
  FaFileAlt,
  FaRocket,
  FaMicrosoft,
  FaLaptopCode,
} from "react-icons/fa";

const education = [
  {
    title: "B.E. Computer Engineering",
    meta: "Vidyavardhini's College of Engineering and Technology",
    detail: "Passed out May 2026 • CGPA 7.8/10",
  },
];

const leadership = [
  {
    title: "Microsoft Learn Student Club — AI/ML Lead",
    meta: "MLSC Club Lead",
    points: [
      "Led AI/ML initiatives and mentored students on real-world project execution.",
      "Conducted workshops on Python, ML pipelines, and applied AI systems.",
      "Built multiple AI-based prototypes across NLP and data analysis.",
    ],
  },
];

const achievements = [
  "DSA Hackathon Finalist — Top 5 participants",
  "24-Hour Hackathon Finalist — MLSC",
  "Avalanche 24-Hour Hackathon Finalist",
  "Organized Abacus Tech Event — 500+ participants",
];

const research = {
  title: "Genesage: Advanced Genomic Variant Pathogenicity Analysis via the Evo2 Foundation Model",
  meta: "Published Research Paper",
  detail:
    "Research work on a full-stack genomic variant analysis platform using Evo2, FastAPI, Next.js, Modal GPU infrastructure, PostgreSQL, and pathogenicity prediction workflows.",
};

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-shell reveal-card">
        <div className="about-left">
          <div className="avatar-orb" aria-hidden="true">
            JP
          </div>

          <div>
            <p className="section-kicker">About Me</p>
            <h2>
              Practical systems.
              <br />
              Clear execution.
            </h2>

            <p className="about-copy">
              I’m Jayvin Parmar, a Computer Engineering graduate focused on
              building practical, scalable systems using full-stack development,
              AI workflows, data analysis, automation, and product-oriented
              engineering.
            </p>

            <div className="about-traits">
              <span><FaCode /> Systems focused</span>
              <span><FaBrain /> AI/Data driven</span>
              <span><FaRocket /> Product minded</span>
              <span><FaLaptopCode /> Execution heavy</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="info-card education-card">
            <div className="info-icon">
              <FaGraduationCap />
            </div>

            <div>
              <p className="mini-label">Education</p>
              {education.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.meta}</p>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card leadership-card">
            <div className="info-icon">
              <FaMicrosoft />
            </div>

            <div>
              <p className="mini-label">Leadership</p>
              {leadership.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.meta}</p>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card research-card">
            <div className="info-icon">
              <FaFileAlt />
            </div>

            <div>
              <p className="mini-label">Research</p>
              <h3>{research.title}</h3>
              <p>{research.meta}</p>
              <span>{research.detail}</span>
            </div>
          </div>

          <div className="info-card achievements-card">
            <div className="info-icon">
              <FaTrophy />
            </div>

            <div>
              <p className="mini-label">Achievements</p>

              <div className="achievement-list">
                {achievements.map((item) => (
                  <span key={item}>
                    <FaUsers />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
