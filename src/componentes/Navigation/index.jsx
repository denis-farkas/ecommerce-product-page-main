import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import './mobile-navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <NavLink
          to={`/collections`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <li className="nav-item">Collections</li>
        </NavLink>
        <NavLink
          to={`/men`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <li className="nav-item">Men</li>
        </NavLink>
        <NavLink
          to={`/women`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <li className="nav-item">Women</li>
        </NavLink>
        <NavLink
          to={`/about`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <li className="nav-item">About</li>
        </NavLink>
        <NavLink
          to={`/contact`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <li className="nav-item">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
