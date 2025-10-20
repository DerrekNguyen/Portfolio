import '../../styles/projects/projectItem.css'
import * as motion from "motion/react-client"
import { useState } from 'react'
import { AnimatePresence } from 'motion/react';

interface projectItemInterface {
  id: string,
  title: string,
  description: string,
  image: string,
}

function ProjectItem({ id, title, description, image }: projectItemInterface) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

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
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.img
          src={image}
          className="absolute inset-0 max-w-full max-h-full object-contain rounded-[15%] -z-10 opacity-[0.3] brightness-70 blur-[4px]"
          layoutId={`${id}-image`}
        />
        <motion.h2 layoutId={`${id}-title`} className="projectTitle">
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
              <div className="h-[60%] w-full flex flex-row justify-start items-start">
                <div className="rounded-br-[1.5rem] border-r-8 border-b-8 border-green-500 overflow-hidden h-full">
                  <motion.img
                    src={image}
                    className="h-full w-full object-cover"
                    layoutId={`${id}-image`}
                  />
                </div>
                <div className='flex-1 h-full flex flex-col justify-center'>
                  <motion.h2 layoutId={`${id}-title`} className="[font-family:'Montserrat'] text-[clamp(0.5rem,2vw,2rem)] font-bold my-8">
                    {title}
                  </motion.h2>
                  {/* technologies used here. use C# and SDL as placeholder for now*/}
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="text-sm font-mono bg-gray-200 px-2 py-1 rounded">C#</span>
                    <span className="text-sm font-mono bg-gray-200 px-2 py-1 rounded">SDL</span>
                  </div>
                </div>
              </div>
              <motion.div className='h-[40%] flex flex-col justify-end w-full'>
                <motion.p
                  className="modalDescription"
                >
                  {description}
                </motion.p>
                <motion.button
                  className="closeButton"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectItem;