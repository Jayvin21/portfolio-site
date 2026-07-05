import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    const handleMouseMove = (event) => {
      if (event.clientY <= 24) {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header className={`navbar ${isHidden ? "navbar-hidden" : ""}`}>
      <a href="#home" className="nav-logo">
        {profile.name}
      </a>

      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;