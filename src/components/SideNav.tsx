import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import aboutImage from '../assets/meInArt.png';
import { FaArrowLeft } from 'react-icons/fa';


export function SideNav() {
  const [navOpen, setNavOpen] = useState(true);
  const handleToggle = () => {
    setNavOpen(prev => !prev)
  }
  
  return (
    <header className={navOpen ? 'open' : 'close'}>
      <FaArrowLeft 
      className="menuIcon"
      onClick={handleToggle}
      />
    <nav>
      <div className="intro">
        <div className="about-img">
          <Link to={"/"}><img src={aboutImage} alt=""/></Link>
        </div>
        <span>Sarah Berg</span>
      </div>
      <ul>
        <li>
          <NavLink end to="/" className={({isActive}) => (isActive ? 'isActive' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? 'isActive' : '')}>About</NavLink>
        </li>
        <li>
          <NavLink to="/small-projects" className={({isActive}) => (isActive ? 'isActive' : '')}>Small Projects</NavLink>
        </li>
        <li>
          <NavLink to="/todo-list" className={({isActive}) => (isActive ? 'isActive' : 'nei')}>Todo-list</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  );
}
