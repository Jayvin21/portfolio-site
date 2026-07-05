import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { profile } from "../data/portfolio";

const contactButtons = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jayvin-parmar-j21",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Jayvin21",
    href: profile.github,
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-shell contact-shell-v2 reveal-card">
        <div className="contact-main contact-main-v2">
          <p className="section-kicker">Contact</p>

          <h2>
            Let’s build
            <br />
            something useful.
          </h2>

          <p>
            Open to software development, dashboard systems, AI tools,
            automation workflows, and product-focused engineering opportunities.
          </p>

          <a className="contact-cta" href={`mailto:${profile.email}`}>
            <FaRocket />
            Start a conversation
          </a>
        </div>

        <div className="contact-actions-panel">
          <p className="mini-label">Reach Me</p>
          <h3>Use any of these links directly.</h3>

          <div className="contact-button-list">
            {contactButtons.map((button) => {
              const Icon = button.icon;

              return (
                <a
                  className="contact-button"
                  href={button.href}
                  target={button.href.startsWith("http") ? "_blank" : undefined}
                  rel={button.href.startsWith("http") ? "noreferrer" : undefined}
                  key={button.label}
                >
                  <span className="contact-button-icon">
                    <Icon />
                  </span>

                  <span className="contact-button-text">
                    <strong>{button.label}</strong>
                    <small>{button.value}</small>
                  </span>

                  <FaArrowRight className="contact-button-arrow" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
