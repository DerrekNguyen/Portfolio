import "../styles/projects/project.css"
import ProjectItem from "../components/Projects/ProjectItem";
import ProjectModal from "../components/Projects/ProjectModal";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
}

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { title: "Game Boy Emulator", description: "A C# emulator with full CPU/PPU/APU." },
    { title: "Portfolio Website", description: "React + Tailwind portfolio with animations." },
  ];

  return (
    <div className="project">
      {projects.map((proj, i) => (
        <ProjectItem
          key={i}
          title={proj.title}
          onOpen={() => setActiveProject(proj)}
        />
      ))}

      {activeProject &&
        <ProjectModal
          title={activeProject.title}
          description={activeProject.title}
          onClose={() => setActiveProject(null)}>
        </ProjectModal>
      }
    </div>
  );
}

export default Projects;