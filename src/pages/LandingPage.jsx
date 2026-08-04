import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCarousel from "../components/ProjectCarousel"
import "../styles/global.css";

export default function LandingPage() {
  return (
    <>
      <Header />

      <ProjectCarousel />

      <main>
        <section className="hero">
          <h1>NADIA ISLAS</h1>
          <p>Explorando ideas más allá de lo conocido.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}