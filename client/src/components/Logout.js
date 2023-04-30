import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.token = '';
    navigate('/');
  }

  return (
    <button onClick={handleClick}>
      Logout
    </button>
  );
}

export default Logout;

