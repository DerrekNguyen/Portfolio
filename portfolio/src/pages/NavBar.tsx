import '../styles/navBar.css'
import ProjectDefault from '../assets/icons/ProjectDefault.svg'
import ProjectHover from '../assets/icons/ProjectHover.svg'
import NavBarItem from '../components/NavBar/NavBarButton';

function NavBar() {
  return (
    <div className='navBar'>
      <NavBarItem imgDefault={ProjectDefault} imgHover={ProjectHover} label='Projects'></NavBarItem>
    </div>
  );
}

export default NavBar;