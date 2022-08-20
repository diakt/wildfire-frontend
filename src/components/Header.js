import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='header-nav'>
            <Link className="header-link" to="/">
                <h1 className="site-title">dangerous lighting</h1>
            </Link>
            <Link className="header-link" to="/about">
                <h1 className="site-title">about</h1>
            </Link>

            {/* <h1 className='site-title'>dangerous lighting</h1> */}
        </nav>
    );
}

export default Header;