import '../../styles/projects/projectItem.css'
import GitHubIcon from '../../assets/icons/GitHub.svg';
import LinkIcon from '../../assets/icons/Link.svg'
import * as motion from "motion/react-client"
import { useState } from 'react'
import { AnimatePresence } from 'motion/react';
import CSharpIcon from "../../assets/icons/CSharp.svg"
import SDLIcon from "../../assets/icons/SDL.svg"
import ReactIcon from "../../assets/icons/React.svg"
import TypeScriptIcon from "../../assets/icons/TypeScript.svg"
import ExpressIcon from "../../assets/icons/ExpressJS.svg"
import MySQLIcon from "../../assets/icons/MySQL.svg"
import DigitalOceanIcon from "../../assets/icons/DigitalOcean.svg"
import JavaScriptIcon from "../../assets/icons/JavaScript.svg"
import P5JSIcon from "../../assets/icons/p5JS.svg"
import MicrosoftSQLIcon from "../../assets/icons/MicrosoftSQL.svg"
import DotNetIcon from "../../assets/icons/DotNetCore.svg"

interface projectItemInterface {
  id: string,
  title: string,
  description: string,
  image: string,
  technologies?: string[],
  gitHubLink?: string,
  projectLink?: string,
}

function ProjectItem({ id, title, description, image, technologies, gitHubLink, projectLink }: projectItemInterface) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const linkVariants = {
    initial: { opacity: 0 },
    animate: (custom: {bgColor: string}) => ({
      opacity: 1,
      backgroundColor: custom.bgColor,
      transition: { opacity: { delay: 0.4 } },
    }),
    hover: (custom: {hoverColor: string}) => ({
      backgroundColor: custom.hoverColor,
      transition: { backgroundColor: { duration: 0.2 } },
    }),
  };
  const imageVariants = {
    hover: {
      scale: 1.2,
    },
  };

  return (
    <>
      <motion.div
        layoutId={id}
        onClick={() => setIsOpen(true)}
        className="projectItem"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.15, ease: "easeInOut" }
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          opacity: {duration: 1},
        }}
      >
        <motion.img
          src={image}
          className="absolute inset-0 w-full h-full object-cover rounded-[15%] -z-10 opacity-[0.3] brightness-70 blur-[4px]"
          layoutId={`${id}-image`}
          initial={{ opacity: 1,}}
          animate={{ opacity: 0.3,}}
          transition={{
            y: { duration: 1 },
            opacity: {duration: 1 },
            filter: {duration: 1  },
          }}
        />
        <motion.h2 
          layoutId={`${id}-title`} 
          className="[font-family:'Montserrat'] font-bold text-[clamp(1.6rem,4vw,3rem)]"
          initial={{
            y: -20,
          }}
          animate={{
            y: 0,
          }}
          transition={{y: { duration: 1 }}}
        >
          {title}
        </motion.h2>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modalOverlay"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              layoutId={id}
              className="modalCard"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="h-[65%] w-full flex flex-row justify-start items-start">
                <motion.div
                  className="rounded-br-[1.5rem] border-r-8 border-b-8 border-green-500 overflow-hidden h-full"
                  initial={{ borderColor: "rgba(34,197,94,0)" }}
                  animate={{ borderColor: "rgba(34,197,94)" }}
                  exit={{
                    borderColor: "rgba(34,197,94,0)",
                    transition: { delay: 0, duration: 0 }
                  }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.img
                    src={image}
                    className="h-full w-full object-cover"
                    layoutId={`${id}-image`}
                    initial={{ opacity: 0.3, filter: "brightness(0.7) blur(4px)" }}
                    animate={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
                <div className='flex-1 h-full flex flex-col justify-center'>
                  <motion.h2
                    layoutId={`${id}-title`}
                    className="[font-family:'Montserrat'] text-[clamp(2rem,4vw,5rem)] font-bold my-8"
                  >
                    {title}
                  </motion.h2>
                  {technologies && (
                    <motion.div
                      className='flex flex-row items-center mx-8 gap-8 justify-center'
                      initial={{ opacity: 0, }}
                      animate={{ opacity: 1, }}
                      transition={{ delay: 0.4 }}
                    >
                      {technologies.map((tech, index) => {
                        let iconSrc;
                        switch (tech) {
                          case "C#":
                            iconSrc = CSharpIcon;
                            break;
                          case "Simple DirectMedia Layer":
                            iconSrc = SDLIcon;
                            break;
                          case "TypeScript":
                            iconSrc = TypeScriptIcon;
                            break;
                          case "React":
                            iconSrc = ReactIcon;
                            break;
                          case "ExpressJS":
                            iconSrc = ExpressIcon;
                            break;
                          case "MySQL":
                            iconSrc = MySQLIcon;
                            break;
                          case "DigitalOcean":
                            iconSrc = DigitalOceanIcon;
                            break;
                          case "JavaScript":
                            iconSrc = JavaScriptIcon;
                            break;
                          case "P5JS":
                            iconSrc = P5JSIcon;
                            break;
                          case "Microsoft SQL Server":
                            iconSrc = MicrosoftSQLIcon;
                            break;
                          case ".NET Framework":
                            iconSrc = DotNetIcon;
                            break;
                          default:
                            iconSrc = null;
                        }
                        return iconSrc ? (
                          <div key={index} className="relative group flex justify-center items-center">
                            <img
                              src={iconSrc}
                              alt={tech}
                              className="h-18 w-18 object-contain cursor-pointer"
                              title={tech}
                            />
                          </div>
                        ) : null;
                      })}
                    </motion.div>
                  )}
                </div>
              </div>
              <motion.div
                className='h-[35%] flex flex-col justify-center w-full'
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ delay: 0.4 }}
              >
                <motion.p
                  className="[font-family:'Queensides'] text-[clamp(0.5rem,1.5vw,2rem)] whitespace-pre-line items-left mx-[2vw] text-justify"
                >
                  {description}
                </motion.p>
              </motion.div>
              <motion.div 
                className='w-full flex flex-row'
              >
                <motion.div 
                  className='w-full'
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <motion.a
                    className="w-full cursor-pointer flex justify-center items-center outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={{bgColor: "#00c951", hoverColor: "#8cf0b4ff"}}
                    variants={linkVariants}
                  >
                    <motion.img
                      src={GitHubIcon}
                      className="h-8 w-8 object-contain"
                      alt="GitHub Link"
                      variants={imageVariants}
                    >
                    </motion.img>
                  </motion.a>
                </motion.div>
                {projectLink &&
                  <motion.div
                    className='w-full'
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                  >
                    <motion.a
                      className="w-full cursor-pointer flex justify-center items-center outline-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      href={projectLink}
                      target="_blank"
                      custom={{ bgColor: "#008cc3ff", hoverColor: "#61ccf7ff" }}
                      variants={linkVariants}
                    >
                      <motion.img
                        src={LinkIcon}
                        className="h-8 w-8 object-contain"
                        alt="Project Link"
                        variants={imageVariants}
                      >
                      </motion.img>
                    </motion.a>
                  </motion.div>}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectItem;