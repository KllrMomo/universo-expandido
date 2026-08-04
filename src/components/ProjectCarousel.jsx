import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/project-carousel';

const PEEK = 80; // px de la card parcial visible a la izquierda

export default function ProjectCarousel({ projects = [] }) {
  const n = projects.length;
  const [index, setIndex] = useState(n); // arranca en el set central
  const [animate, setAnimate] = useState(true);
  const [step, setStep] = useState(0);
  const trackRef = useRef(null);
  const locked = useRef(false);

  // Mide ancho de card + gap
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = track?.firstElementChild;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      setStep(first.offsetWidth + gap);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [n]);

  const go = (dir) => {
    if (locked.current || n === 0) return;
    locked.current = true;
    setAnimate(true);
    setIndex((i) => i + dir);
  };

  // Al terminar la animación, "teletransporta" al set central sin transición
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (index >= 2 * n) {
      setAnimate(false);
      setIndex(index - n);
    } else if (index < n) {
      setAnimate(false);
      setIndex(index + n);
    }
    locked.current = false;
  };

  if (n === 0) return null;

  const items = [...projects, ...projects, ...projects];

  return (
    <section className="carousel" aria-label="Proyectos">
      <div className="carousel__viewport">
        <div
          ref={trackRef}
          className={`carousel__track ${animate ? '' : 'carousel__track--no-anim'}`}
          style={{ transform: `translateX(${-(index * step) - PEEK}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((project, i) => (
            <ProjectCard
              key={`${i}-${project.id ?? project.title}`}
              title={project.title}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </div>

      <button
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => go(-1)}
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12H4M10 6l-6 6 6 6" />
        </svg>
      </button>

      <button
        className="carousel__arrow carousel__arrow--next"
        onClick={() => go(1)}
        aria-label="Siguiente"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      </button>
    </section>
  );
}