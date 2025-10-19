interface projectModalInterface {
  title: string,
  description: string,
  onClose: () => void,
}

function ProjectModal({ title, description, onClose }: projectModalInterface) {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="projectModalContent" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ProjectModal;