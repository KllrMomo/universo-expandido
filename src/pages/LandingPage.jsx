import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCarousel from "../components/ProjectCarousel"
import { fakeProjects } from "../data/trabajos"
import "../styles/global.css";
import ProjectGrid from "../components/ProjectGrid";

export default function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <h1>NADIA ISLAS</h1>
          <p>Explorando ideas más allá de lo conocido.</p>
        </section>

        <ProjectCarousel projects={fakeProjects}/>

        <ProjectGrid projects={fakeProjects} />
        
      </main>

      <Footer />
    </>
  );
}