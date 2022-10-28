import { Link, NavLink } from "react-router-dom";
import aboutImage from '../assets/meInArt.png';



export function SideNav() {
  
  return (
    <header>
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
      </ul>
    </nav>
  </header>
  );
}
