import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  IoLogOut} from 'react-icons/io5';


function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.token = '';
    navigate('/');
  }

  return (
    <button className="navbar__link" onClick={handleClick}>
    <IoLogOut size={28} />
  </button>
  );
}

export default Logout;

