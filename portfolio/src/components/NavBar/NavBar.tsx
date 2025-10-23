import '../../styles/navBar.css'
import ProjectDefault from '../../assets/icons/ProjectDefault.svg'
import ProjectHover from '../../assets/icons/ProjectHover.svg'
import HomeDefault from '../../assets/icons/HomeDefault.svg'
import HomeHover from '../../assets/icons/HomeHover.svg'
import NavBarItem from './NavBarItem.tsx'

function NavBar() {
  return (
    <div className='navBar'>
      <NavBarItem imgDefault={HomeDefault} imgHover={HomeHover} label='Home' path='/home'></NavBarItem>
      <NavBarItem imgDefault={ProjectDefault} imgHover={ProjectHover} label='Projects' path='/projects'></NavBarItem>
    </div>
  );
}

export default NavBar;