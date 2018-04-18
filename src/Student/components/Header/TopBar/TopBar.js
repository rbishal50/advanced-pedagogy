import React from 'react';
import './TopBar.css';
import Logo from '../../Logo/Logo';

const TopBar = (props) => (
  <div className="TopBar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Logo />
        </div>
        <div className="col-md-7">
          
        </div>
        <div className="col-md-2">
        </div>        
      </div>
    </div>
  </div>
);

export default TopBar;