import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <FeaturedProjects />
        <Skills />
        <About />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;