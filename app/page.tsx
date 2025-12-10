import Hero from "./components/hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./projects/Projects";
import ScrollCarousel from "./components/ScrollCarousel";
import SkillsSection from "./components/SkillsArsenal/SkillsSection";
import SkillsArsenal from "./components/SkillsArsenal/SkillsArsenal";

export default function Page() {
  return (

      <main>

        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section id="sobre-mi">
          <AboutMe />
        </section>
      
        {/* SKILLS & EXPERIENCE */}
        <section id="skills-exp">
          <SkillsArsenal /> 
        </section>

        {/* CAROUSEL */}
        <section id="carrousel">
          <ScrollCarousel />
        </section>

        {/* PROJECTS */}
        <section id="projectes">
          <Projects />
        </section>

      </main>
  );
}
