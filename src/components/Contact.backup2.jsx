import { FaEnvelope, FaGithub, FaLinkedin, FaRocket, FaArrowRight } from "react-icons/fa";
import { profile } from "../data/portfolio";

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jayvinparmar",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/jayvinparmar",
    href: profile.github,
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-shell reveal-card">
        <div className="contact-main">
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

        <div className="contact-grid">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                className="contact-card"
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                key={card.label}
              >
                <div className="contact-card-top">
                  <div className="contact-icon">
                    <Icon />
                  </div>

                  <FaArrowRight className="contact-arrow" />
                </div>

                <p>{card.label}</p>
                <h3>{card.value}</h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
