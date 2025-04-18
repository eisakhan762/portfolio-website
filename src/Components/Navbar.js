import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleCLick = () => setClick(!click);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    }else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>

      <ul className={click ? "nav-menu active": "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
