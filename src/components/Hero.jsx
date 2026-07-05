import { profile } from "../data/portfolio";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <div className="badge">
          <span />
          {profile.badge}
        </div>

        <h1>
  I build intelligent systems <br />
  that turn complexity into <span>clarity.</span>
</h1>

        

        <p className="hero-subline">{profile.subline}</p>

        <p className="hero-description">{profile.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
  Explore Work <span>→</span>
</a>

<a href="/Jayvin-Resume-26.pdf" className="btn btn-secondary" download>
  Download Resume
</a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb" />
      </div>
    </section>
  );
}

export default Hero;