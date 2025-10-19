import { useState } from "react";
import '../../styles/navBar.css';
import { useNavigate, useLocation } from "react-router-dom";
import * as motion from "motion/react-client";

interface NavBarParam {
  imgDefault: string,
  imgHover: string,
  label: string,
  path: string
}

function NavBarItem({imgDefault, imgHover, label, path}: NavBarParam) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = (location.pathname === path);

  return (
    <motion.div 
      className={(isHovered || isActive)? 'navItemHover' : 'navItem'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(path)}
      whileTap={{scale: 0.8}}
    >
      <button>
        <img src={(isHovered || isActive) ? imgHover : imgDefault}></img>
        <p>{label}</p>
      </button>
    </motion.div>
  );
}

export default NavBarItem;