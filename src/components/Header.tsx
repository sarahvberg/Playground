import { NavLink } from "react-router-dom";




export function Header() {
  
  return (
    <header>
    <nav>
      <span>Sarah</span>
      <ul>
        <li>
          <NavLink end to="/" className={({isActive}) => (isActive ? 'isActive' : 'nei')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? 'isActive' : 'nei')}>About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  );
}
