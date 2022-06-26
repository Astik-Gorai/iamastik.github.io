import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="Nav">
      <h3>Astik Gorai</h3>
      <ul className="NavItem">
        <li> <Link id="i1" to="/my_projects">My Projects</Link></li>
         <li><Link id="i2" to="/my_skills">My Skills</Link></li>
        <li> <Link  id="i3" to="/my_education">My Education</Link></li>
      
      </ul>
    </div>
  )
}
