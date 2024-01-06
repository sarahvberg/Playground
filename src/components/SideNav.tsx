import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import aboutImage from "../assets/meInArt.png";
import linkedInIcon from "../assets/linkedIn.png";
import instagramIcon from "../assets/instagramIcon.png";
import githubIcon from "../assets/githubIcon.png";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

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
          <div className="about-img">
            <Link to={"/"}>
              <img src={aboutImage} alt="" />
            </Link>
          </div>
          <span>Sarah Berg</span>
          <div className="emoji-line">🐱🎮🪴🏃🏼‍♀️🍳🫧🍅💻✨</div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/sarahvb/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn logo" />
            </a>
            <a
              href="https://github.com/sarahvberg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="Github logo" />
            </a>
            <a
              href="https://www.instagram.com/sarahvberg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram logo" />
            </a>
          </div>
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
