import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  let id = JSON.parse(sessionStorage.getItem('idUser'));

  if (id !== null) {
    return (
      <div className="navbar">
        <div className="container">
          <ul className="navbar-nav">
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Collections</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Men</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Women</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">About</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
};

export default Navigation;
