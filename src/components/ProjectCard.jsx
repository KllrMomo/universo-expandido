import '../styles/project-card.css';

export default function ProjectCard({ title = 'Nombre', image, href = '#' }) {
  return (
    <a className="project-card" href={href}>
      <div className="project-card__media">
        {image && <img src={image} alt={title} draggable="false" />}
      </div>
      <span className="project-card__title">{title}</span>
    </a>
  );
}