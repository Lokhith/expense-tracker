import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header-logo">Expense Tracker</h1>
      <nav className="header-nav">
        <Link
          to="/"
          className={`header-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`header-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
