import React from 'react';
import './NavBar2.css';
import {Link} from 'react-router-dom';

export default function NavBar2() {
  return (
    <div className="Nav2">
      <h3>Astik Gorai</h3>
      <ul className="NavItem2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my_projects">My Projects</Link></li>
        <li><Link to="/my_skills">My Skills</Link></li>
        <li><Link to="/my_education">My Education</Link></li>
      </ul>
    </div>
  )
}
