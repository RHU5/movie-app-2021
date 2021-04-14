import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/about" className="nav__link">
        About
      </Link>
    </div>
  );
}

export default Navigation;
