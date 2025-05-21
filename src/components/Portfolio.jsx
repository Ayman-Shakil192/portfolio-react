import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
