import { NavLink } from "react-router-dom";
import aboutImage from '../assets/meInArt.png';



export function SideNav() {
  
  return (
    <header>
    <nav>
      <div className="intro">
        <div className="about-img">
          <img src={aboutImage} alt=""/>
        </div>
      </div>
      <span>Sarah Berg</span>
      <ul>
        <li>
          <NavLink end to="/" className={({isActive}) => (isActive ? 'isActive' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? 'isActive' : '')}>About</NavLink>
        </li>
        <li>
          <NavLink to="/random-dinner" className={({isActive}) => (isActive ? 'isActive' : '')}>Random dinner</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  );
}
