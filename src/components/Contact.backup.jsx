import { profile } from "../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let’s build something useful.</h2>
          <p>
            Have a project in mind or just want to connect? I’m open to software
            development, dashboard systems, AI tools, and product-focused
            engineering work.
          </p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <span>Email</span>
            {profile.email}
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            linkedin.com/in/jayvinparmar
          </a>

          <a href={profile.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            github.com/jayvinparmar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;