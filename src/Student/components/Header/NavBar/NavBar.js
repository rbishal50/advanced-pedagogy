import React from 'react';
import './NavBar.css';

const NavBar = (props) => (
  <div className="NavBar">
    <div className="container-fluid">
      <ul className="nav-items">
        <li><a href="" className="active">Dashboard</a></li>
        <li><a href="">Progress</a></li>
        <li><a href="">Subjects</a></li>
        <li><a href="">Activity</a></li>
      </ul>
    </div>
  </div>
);

export default NavBar;