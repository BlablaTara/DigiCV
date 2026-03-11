import Navbar from "./components/Navbar.js";

export default function Home() {
  return (
    <main>

      <Navbar />
      
      <section id="home">
        <h1>Tara Aamo</h1>
      </section>

      <section id="projects"> 
        <h2>Projekter</h2>
      </section>

      <section id="about">
        <h2>Om mig</h2>
      </section>

      <section id="contact">
        <h2>Kontakt</h2>
      </section>

    </main>
  );
}
