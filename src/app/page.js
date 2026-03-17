import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <main>

      <div className="page-container">

        <Navbar />

        <section id="home">
          <h1>Emma Lykke</h1>
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
      </div>
    </main>
  );
}
