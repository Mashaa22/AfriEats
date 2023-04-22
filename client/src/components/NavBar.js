import React from 'react'
import { NavLink } from 'react-router-dom';
import{IoNotifications, IoCart, IoPersonCircleSharp} from 'react-icons/io5';

import './NavBar.css';


function NavBar() {
  return (
     <nav>
      <div className="navbar__logo">
        <h1>
          <b className='capital'>A</b>FRI<b className="navbar__logo-eats"><b className='capital'>E</b>ATS</b>
        </h1>
        
      </div>
      <div>
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/home"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Meals"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About us"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Logout"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notification"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <IoNotifications size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <IoCart size={28} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <IoPersonCircleSharp size={28} />
            </NavLink>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
  
}

export default NavBar
