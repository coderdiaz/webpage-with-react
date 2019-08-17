import React from 'react';
import Logotype from '../assets/logotype.png';

const Navigation = () => <header className="header">
<div className="container grid-container">
  <div className="logo-wrapper">
    <img src={Logotype} width="50" alt="" />
  </div>
  <div className="navbar">
    <ul className="nav">
      <li className="nav-item"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#">About</a></li>
      <li className="nav-item"><a href="#">Contact</a></li>
    </ul>
  </div>
</div>
</header>;

export default Navigation;
