import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { IoNotifications, IoCart, IoPerson} from 'react-icons/io5';
import Logout from './Logout';
import './Navbar.css';


function NavBar() {
  return (
     <nav>
      <div className="navbar__logo">
        <h1>
        <Link to="/" className="custom-link" style={{ textDecoration: 'none', color: 'rgb(247, 191, 8)', fontSize: '20px',    fontWeight: 'bold' }}>
         <b className='capital'>A</b>FRI<b className="navbar__logo-eats"><b className='capital'>E</b>ATS</b>
        </Link>

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
              to="/about"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              About us
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/notification"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <IoNotifications size={25} />
            </NavLink>
          </li> */}
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
              to="/login"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
  <IoPerson size={28} />
            </NavLink>
          </li>
          <li>
          <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
  
}

export default NavBar
