import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import './mobile-navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <NavLink
          to={`/collections`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Collections</div>
        </NavLink>
        <NavLink
          to={`/men`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Men</div>
        </NavLink>
        <NavLink
          to={`/women`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Women</div>
        </NavLink>
        <NavLink
          to={`/about`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">About</div>
        </NavLink>
        <NavLink
          to={`/contact`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Contact</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
