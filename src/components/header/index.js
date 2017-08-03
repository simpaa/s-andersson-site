import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="main-header">

    <div className="profile-picture"></div>

    <h1>Simon Andersson</h1>
    <p><i>Creative web and mobile developer based in Dalarna, Sweden.</i></p>
    <nav className="main-menu">
      <ul>
        <li><NavLink exact to="/" activeClassName="menu-item-active">Projects</NavLink></li>
        <li><NavLink to="/blog" activeClassName="menu-item-active">Blog</NavLink></li>
        <li><NavLink to="/about" activeClassName="menu-item-active">About</NavLink></li>
      </ul>
    </nav>

  </header>
);


export default Header;
