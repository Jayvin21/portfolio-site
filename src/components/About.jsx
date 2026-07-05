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
  FaExternalLinkAlt,
  FaCertificate,
  FaSchool,
  FaChessKnight,
  FaVolleyballBall,
  FaGamepad,
  FaMicrophoneAlt,
  FaHandsHelping,
} from "react-icons/fa";

const education = [
  {
    title: "B.E. Computer Engineering",
    meta: "Vidyavardhini's College of Engineering and Technology",
    detail: "Passed out May 2026 • CGPA 7.8/10",
    icon: FaGraduationCap,
  },
  {
    title: "Higher Secondary — PCM",
    meta: "Shri. T.P. Bhatia College of Science and Technology",
    detail: "Science stream with Physics, Chemistry, and Mathematics.",
    icon: FaSchool,
  },
  {
    title: "Schooling",
    meta: "St. John's High School",
    detail: "Academic foundation before higher secondary and engineering.",
    icon: FaSchool,
  },
];

const technicalLeadership = {
  title: "Microsoft Learn Student Club — AI/ML Coordinator",
  meta: "MLSC Coordinator",
  points: [
    "Coordinated AI/ML initiatives and mentored students on real-world project execution.",
    "Conducted workshops on Python, ML pipelines, and applied AI systems.",
    "Built AI-based prototypes across NLP, automation, and data analysis.",
  ],
};

const campusLeadership = {
  title: "Student Council & Campus Activities",
  meta: "Coordinator / Participant",
  points: [
    "Helped coordinate college fests, competitions, and student-led events.",
    "Participated in debate club activities and competitive speaking formats.",
    "Represented in chess, volleyball, table tennis, and Valorant tournaments.",
  ],
};

const achievements = [
  "DSA Hackathon Finalist — Top 5 participants",
  "24-Hour Hackathon Finalist — MLSC",
  "Avalanche 24-Hour Hackathon Finalist",
  "Organized Abacus Tech Event — 500+ participants",
];

const certifications = [
  "Infosys Springboard — Python Fundamentals",
  "Infosys Springboard — Java Fundamentals",
  "VPNs certificate",
  "ABACUS event participation certificates",
];

const research = {
  title: "Genesage: Advanced Genomic Variant Pathogenicity Analysis via the Evo2 Foundation Model",
  meta: "Published Research Paper",
  detail:
    "Research work on a full-stack genomic variant analysis platform using Evo2, FastAPI, Next.js, Modal GPU infrastructure, PostgreSQL, and pathogenicity prediction workflows.",
  href: "/papers/genesage-paper.pdf",
};

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-shell about-shell-v2 reveal-card">
        <div className="about-left about-left-v2">
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

        <div className="about-right about-right-v2">
          <div className="info-card education-card education-card-v2">
            <div className="info-icon">
              <FaGraduationCap />
            </div>

            <div>
              <p className="mini-label">Education</p>

              <div className="education-stack">
                {education.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="education-item" key={item.title}>
                      <div className="education-mini-icon">
                        <Icon />
                      </div>

                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.meta}</p>
                        <span>{item.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="info-card leadership-card leadership-card-v3">
            <div className="info-icon">
              <FaMicrosoft />
            </div>

            <div>
              <p className="mini-label">Leadership & Campus Involvement</p>

              <div className="leadership-grid">
                <div className="leadership-block">
                  <h3>{technicalLeadership.title}</h3>
                  <p>{technicalLeadership.meta}</p>

                  <ul>
                    {technicalLeadership.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="leadership-block">
                  <h3>{campusLeadership.title}</h3>
                  <p>{campusLeadership.meta}</p>

                  <ul>
                    {campusLeadership.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="activity-pills">
                    <span><FaMicrophoneAlt /> Debate</span>
                    <span><FaChessKnight /> Chess</span>
                    <span><FaVolleyballBall /> Volleyball</span>
                    <span><FaGamepad /> Valorant</span>
                    <span><FaHandsHelping /> Fest coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card research-card research-card-v2">
            <div className="info-icon">
              <FaFileAlt />
            </div>

            <div>
              <p className="mini-label">Research</p>
              <h3>{research.title}</h3>
              <p>{research.meta}</p>
              <span>{research.detail}</span>

              <a
                className="paper-link"
                href={research.href}
                target="_blank"
                rel="noreferrer"
              >
                View research paper
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="info-card achievements-card achievements-card-v2">
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

          <div className="info-card certificates-card">
            <div className="info-icon">
              <FaCertificate />
            </div>

            <div>
              <p className="mini-label">Certificates</p>

              <div className="certificate-list">
                {certifications.map((item) => (
                  <span key={item}>
                    <FaCertificate />
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
