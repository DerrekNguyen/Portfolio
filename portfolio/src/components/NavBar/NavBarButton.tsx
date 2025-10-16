import { useState } from "react";
import '../../styles/navBar.css';

interface NavBarParam {
  imgDefault: string,
  imgHover: string,
  label: string,
}

function NavBarItem({imgDefault, imgHover, label}: NavBarParam) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='navItem'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button>
        <img src={isHovered ? imgHover : imgDefault}></img>
        <p>{label}</p>
      </button>
    </div>
  );
}

export default NavBarItem;