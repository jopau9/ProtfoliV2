import Hero from "./components/hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ScrollCarousel from "./components/ScrollCarousel";

export default function Page() {
  return (
    <div 
      style={{
        background: "radial-gradient(circle, rgba(64,65,70,1) 0%, rgba(26,28,33,1) 300%)",
      }}
      >
      <main>
        <Hero />
        
        <AboutMe />
        <ScrollCarousel />
        <Projects />
      </main>
    </div>
  );
}
