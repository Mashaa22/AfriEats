import React from 'react';
import "./Header.css";

function Header(){
    return(
        <nav className="navbar p-3">
            <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
                <a className="navbar-brand">
                    KFC ADMIN
                </a>
            </div>
        </nav>
    )
}
export default Header;