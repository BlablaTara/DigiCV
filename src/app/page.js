import Hero from "../sections/Hero.js";
import Navbar from "../components/Navbar.js";
import Projects from "@/sections/Projects.js";

export default function Home() {
  return (
    <main>

      <div className="page-container">
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="projects"> 
          <Projects />
        </section>

        <section id="about">
          <h2>Om mig</h2>
        </section>

        <section id="contact">
          <h2>Kontakt</h2>
        </section>
      </div>
    </main>
  );
}
