import About from "./components/About";
import Domains from "./components/Domains";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectIndex from "./components/ProjectIndex";

export default function Page() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      {/* Els projectes van primer: són el que ha de pesar més. */}
      <section id="work" className="scroll-mt-20">
        <ProjectIndex />
      </section>

      <section id="domains" className="scroll-mt-20">
        <Domains />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Footer />
      </section>
    </>
  );
}
