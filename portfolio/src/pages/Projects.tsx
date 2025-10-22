import "../styles/projects/project.css"
import ProjectItem from "../components/Projects/ProjectItem";
import GameBoy from "../assets/images/projects/GameBoy.png"

interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  gitHubLink?: string;
}

function Projects() {

  const projects: Project[] = [
    { title: "GameBoy Emulator",
      description: 
      "A Game Boy emulator capable of reading ROM files to simulate playing on the Game Boy console, with all UI elements managed by SDL and processing handled in C#. " + 
      "The architecture of the Game Boy, the CPU, PPU (graphics), and APU (audio), was carefully implemented to ensure all components interact correctly.",
      image: GameBoy,
      technologies: ["C#", "SDL"],
      gitHubLink: "https://github.com/DerrekNguyen/Derrek-GameBoy",
    },
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
          technologies={proj.technologies}
          gitHubLink={proj.gitHubLink}
        />
      ))}
    </div>
  );
}

export default Projects;