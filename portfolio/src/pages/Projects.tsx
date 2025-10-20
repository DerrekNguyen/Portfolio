import "../styles/projects/project.css"
import ProjectItem from "../components/Projects/ProjectItem";

interface Project {
  title: string;
  description: string;
}

function Projects() {

  const projects: Project[] = [
    { title: "Game Boy Emulator", description: "A C# emulator with full CPU/PPU/APU." },
    { title: "Portfolio Website", description: "React + Tailwind portfolio with animations." },
  ];

  return (
    <div className="project">
      {projects.map((proj, i) => (
        <ProjectItem
          key={i}
          id={i.toString()}
          description={proj.description}
          title={proj.title}
        />
      ))}
    </div>
  );
}

export default Projects;