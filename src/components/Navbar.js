import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">MyPortfolio</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
