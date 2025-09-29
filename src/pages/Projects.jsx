import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

function Projects() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>My Projects</h1>
      // Map each project object to a ProjectCard component
      {projects.map(proj => (
        <ProjectCard 
          key={proj.id} 
          image={proj.image} 
          title={proj.title} 
          role={proj.role} 
          description={proj.description} 
          link={proj.link} 
        />
      ))}
    </div>
  );
}

export default Projects;
