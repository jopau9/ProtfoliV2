import Hero from "./components/hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./projects/Projects";
import ScrollCarousel from "./components/ScrollCarousel";
import SkillsSection from "./components/SkillsSection/SkillsSection";

export default function Page() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(64,65,70,1) 0%, rgba(26,28,33,1) 300%) ",
      }}
    >
      <main>

        {/* HERO */}
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section id="sobre-mi">
          <AboutMe />
        </section>
      
        {/* CAROUSEL */}
        <section id="carrousel">
          <ScrollCarousel />
        </section>

        <SkillsSection />

        {/* PROJECTS */}
        <section id="projectes">
          <Projects />
        </section>

      </main>
    </div>
  );
}
