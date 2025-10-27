import ProjectItem from "../components/Projects/ProjectItem";
import GameBoy from "../assets/images/projects/GameBoy.png";
import PokeApp from "../assets/images/projects/PokeApp.png";
import DerrekApplication from "../assets/images/projects/DerrekApplication.png"
import GalacticGuardians from "../assets/images/projects/GalacticGuardians.png"
import DebtNextDashboard from "../assets/images/projects/DebtNextDashboard.png"
import Portfolio from "../assets/images/projects/Portfolio.png"

interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  gitHubLink?: string;
  projectLink?: string;
}

function Projects() {

  const projects: Project[] = [
    {
      title: "GameBoy Emulator",
      description:
        "A Game Boy emulator capable of reading ROM files to simulate playing on the Game Boy console, with all UI elements managed by SDL and processing handled in C#. " +
        "The architecture of the Game Boy, the CPU, PPU (graphics), and APU (audio), was carefully implemented to ensure all components interact correctly.",
      image: GameBoy,
      technologies: ["C#", "Simple DirectMedia Layer"],
      gitHubLink: "https://github.com/DerrekNguyen/Derrek-GameBoy",
    },
    {
      title: "PokeApp",
      description: "A passion project built with TypeScript and React for the UI, ExpressJS for the back end, " +
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
      image: GalacticGuardians,
      technologies: ["JavaScript", "P5JS"],
      gitHubLink: "https://github.com/dominicf2001/project-beta",
      projectLink: "https://dominicf2001.github.io/project-beta/",
    },
    {
      title: "Derrek Application",
      description: "A full-stack desktop application for monitoring daily activities and managing schedules, " + 
      "built with C# and XAML on the WPF framework using Dapper to connect to a local SQL Server, " + 
      "and serving as a practical exercise in MVVM software design patterns and integrating database connections with APIs",
      image: DerrekApplication,
      technologies: ["C#", ".NET Framework", "Microsoft SQL Server"],
      gitHubLink: "https://github.com/DerrekNguyen/Derrek-Application",
    },
    {
      title: "DebtNext Dashboard",
      description: "Developed a full-stack employee dashboard for DebtNext, " + 
      "designing and implementing a SQL database and Node.js REST API backend to manage interdepartmental events and communication " + 
      "while collaborating in an Agile team to deliver the product within time and budget constraints.",
      image: DebtNextDashboard,
      technologies: ["JavaScript", "React", "ExpressJS", "MySQL", "DigitalOcean"],
      gitHubLink: "https://github.com/EthanMorris2003/Capstone_Project",
    },
    {
      title: "Portfolio",
      description: "A responsive and visually engaging portfolio website built with React and TypeScript, " + 
      "styled using Tailwind CSS and animated with Framer Motion to create smooth and interactive transitions. " + 
      "It houses my projects throughout my learning journey, as well as my contact information, and is fully deployed and hosted on GitHub Pages",
      image: Portfolio,
      technologies: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
      gitHubLink: "https://github.com/DerrekNguyen/Portfolio",
      projectLink: "https://derreknguyen.github.io/Portfolio/",
    },
  ];

  return (
    <div className="gap-[5rem] flex flex-wrap justify-center mt-[20rem]">
      {projects.map((proj, i) => (
        <ProjectItem
          key={i}
          id={i.toString()}
          description={proj.description}
          title={proj.title}
          image={proj.image}
          technologies={proj.technologies}
          gitHubLink={proj.gitHubLink}
          projectLink={proj.projectLink}
        />
      ))}
    </div>
  );
}

export default Projects;