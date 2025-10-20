import '../../styles/projects/projectItem.css'
import * as motion from "motion/react-client"
import { useState } from 'react'
import { AnimatePresence } from 'motion/react';

interface projectItemInterface {
  id: string,
  title: string,
  description: string,
}

function ProjectItem({ id, title, description }: projectItemInterface) {
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
        <motion.h2 layoutId={`${id}-title`} className="projectTitle">
          {title}
        </motion.h2>
        <motion.p layoutId={`${id}-description`} className="projectDescription">
          {description}
        </motion.p>
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
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.h2 layoutId={`${id}-title`} className="modalTitle">
                {title}
              </motion.h2>
              <motion.p
                className="modalDescription"
                layoutId={`${id}-description`}
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
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectItem;