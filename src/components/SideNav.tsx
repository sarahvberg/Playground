import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function SideNav() {
  const [navOpen, setNavOpen] = useState(true);
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header className={navOpen ? "open" : "close"}>
      <FaArrowLeft className="menuIcon" onClick={handleToggle} />
      <nav>
        <div className="intro">
          <span>Sarah Berg</span>
        </div>
        <ul className="navList">
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Forside
            </NavLink>
          </li>
          {/*  <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Om
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/small-projects"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Småtterier
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
