import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { List ,HouseDoor, ListUl, Basket3, CloudPlus, BoxArrowRight } from "react-bootstrap-icons";
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const history = useNavigate()
  function handleClick() {
    localStorage.token = '';
    history('/');
    window.location.reload();
    
  }

  return (
    <div className="container">
      <div style={{ width: isOpen ? '240px' : '80px' }} className='sidebar'>
        <div className="top-section">
          <div style={{ marginLeft: isOpen ? '10px' : '0px' }} className="bars">
            <List onClick={toggle} />
          </div>
        </div>
        <NavLink to='/dashboard' id="link" activeClassName='active'>
          <div id="icon"><HouseDoor /></div>
          <div style={{ display: isOpen ? 'block' : 'none' }} id="link-text">Recent Orders</div>
        </NavLink>
        <NavLink to='/order-details' id="link" activeClassName='active'>
          <div id="icon"><ListUl /></div>
          <div style={{ display: isOpen ? 'block' : 'none' }} id="link-text"> Order Details</div>
        </NavLink>
        <NavLink to='/menu-list' id="link" activeClassName='active'>
          <div id="icon"><Basket3 /></div>
          <div style={{ display: isOpen ? 'block' : 'none' }} id="link-text">Menu List</div>
        </NavLink>
        <NavLink to='/add-menu' id="link" activeClassName='active'>
          <div id="icon"><CloudPlus /></div>
          <div style={{ display: isOpen ? 'block' : 'none' }} id="link-text">Add Menu</div>
        </NavLink>
        <NavLink to='/' id="link" activeClassName='active' onClick={handleClick}>
          <div id="icon"><BoxArrowRight /></div>
          <div style={{ display: isOpen ? 'block' : 'none' }} id="link-text" >Logout</div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar;
