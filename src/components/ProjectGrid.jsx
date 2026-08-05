import '../styles/proyect-grid.css';

export default function ProjectGrid({ title = 'Trabajos', projects = [], columns = 3 }) {
  return (
    <section className="grid-section">
      <h2 className="grid-section__title">{title}</h2>

      <ul className="grid-section__list" style={{ '--cols': columns }}>
        {projects.map((project) => (
          <li key={project.id ?? project.title}>
            <a className="grid-item" href={project.href ?? '#'}>
              <div className="grid-item__media">
                {project.image && (
                  <img src={project.image} alt={project.title} draggable="false" />
                )}
              </div>
              <span className="grid-item__title">{project.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}