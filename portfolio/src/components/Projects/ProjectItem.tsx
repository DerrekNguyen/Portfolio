import '../../styles/projects/projectItem.css'
import * as motion from "motion/react-client"

interface projectItemInterface {
  title: string,
  onOpen: () => void,
}

function ProjectItem({ title, onOpen }: projectItemInterface) {
  return (
    <div className="projectItem" onClick={onOpen}>
      <p>{title}</p>
    </div>
  );
}

export default ProjectItem;