import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Authentication</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </nav>
    </div>   
  );
}

export default Navbar;
