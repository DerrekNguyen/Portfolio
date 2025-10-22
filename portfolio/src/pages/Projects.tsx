import "../styles/projects/project.css"
import ProjectItem from "../components/Projects/ProjectItem";
import GameBoy from "../assets/images/projects/GameBoy.png";
import PokeApp from "../assets/images/projects/PokeApp.png";

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
    { title: "PokeApp",
      description: "A passion project built with TypeScript and React for the UI, ExpressJS for the back end, "+ 
        "and MySQL on a DigitalOcean cloud database to track users’ personal Pokémon card collections, " +
        "teaching me how to design databases from the ground up, create elegant table relationships, " +
        "and implement cybersecurity measures to securely store sensitive information.",
      image: PokeApp,
      technologies: ["TypeScript", "React", "ExpressJS", "MySQL", "DigitalOcean"],
      gitHubLink: "https://github.com/ACruz2004/Poke-App",
    },
    {
      title: "Galatic Guardians",
      description: "A collaborative tower defense game developed within a Scrum team using Agile methodology, " + 
      "where I designed the core game logic, including entity movement, interactions, and overall game flow, " + 
      "while gaining experience in iterative development and professional team practices.",
      image: PokeApp,
      technologies: ["TypeScript", "React", "ExpressJS", "MySQL", "DigitalOcean"],
      gitHubLink: "https://github.com/ACruz2004/Poke-App",
    },
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