function ProjectCard({ image, title, role, description, link }) {
  return (
    <div className="project-card" style={{ textAlign: "center" }}>
      <img src={image} alt={title} style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }} />
      <h3>{title}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p>{description}</p>
      <a href={link} style={{ color: "#007bff" }}>View Project</a>
    </div>
  );
}

export default ProjectCard;
