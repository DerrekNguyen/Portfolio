import "../styles/projects/project.css"
import ProjectItem from "../components/Projects/ProjectItem";
import GameBoy from "../assets/images/projects/GameBoy.png"

interface Project {
  title: string;
  description: string;
  image: string;
}

function Projects() {

  const projects: Project[] = [
    { title: "GameBoy Emulator", description: "A C# emulator with full CPU/PPU/APU.", image: GameBoy },
    { title: "Portfolio Website", description: "React + Tailwind portfolio with animations.", image: "yo mama"},
  ];

  return (
    <div className="project">
      {projects.map((proj, i) => (
        <ProjectItem
          key={i}
          id={i.toString()}
          description={proj.description}
          title={proj.title}
          image={proj.image}
        />
      ))}
    </div>
  );
}

export default Projects;