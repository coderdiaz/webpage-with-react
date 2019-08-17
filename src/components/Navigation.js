import React from 'react';
import { Link } from 'react-router-dom';
import Logotype from '../assets/logotype.png';

const Navigation = () => <header className="header">
<div className="container grid-container">
  <div className="logo-wrapper">
    <img src={Logotype} width="50" alt="" />
  </div>
  <div className="navbar">
    <ul className="nav">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/about">About</Link></li>
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</div>
</header>;

export default Navigation;
