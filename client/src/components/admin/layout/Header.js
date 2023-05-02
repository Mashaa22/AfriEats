import React from 'react';
import "./Header.css";

function Header(){
    return(
        <nav className="navbar p-3 children">
                <h3 className="navbar-brand" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>
                    <b className='capital'>A</b>FRI<b className="navbar__logo-eats"><b className='capital'>E</b>ATS</b><b className='dashboard capital'>   D</b>ASHBOARD
                </h3>
                <p className="">
                    ADMIN
                </p>
        </nav>
    )
}
export default Header;