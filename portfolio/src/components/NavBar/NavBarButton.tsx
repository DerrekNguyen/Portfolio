import { useState } from "react";
import '../../styles/navBar.css';
import { useNavigate, useLocation } from "react-router-dom";

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
    <div 
      className={(isHovered || isActive)? 'navItemHover' : 'navItem'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(path)}
    >
      <button>
        <img src={(isHovered || isActive) ? imgHover : imgDefault}></img>
        <p>{label}</p>
      </button>
    </div>
  );
}

export default NavBarItem;