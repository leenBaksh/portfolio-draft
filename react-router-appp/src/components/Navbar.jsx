import "./Navbarstyles.css"

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
    <Link to="/">
      <h1>Portfolio</h1>
      </Link>
      <ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/project">Project</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/contact">Contact</Link>
        </Li>
      </ul>
    </div>
  );
};

export default Navbar;