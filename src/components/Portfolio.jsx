import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
