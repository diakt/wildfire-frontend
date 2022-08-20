import React from 'react';

function Footer(props) {
    return (
        <nav className='footer'>
            <p>{props.footerText}</p>
        </nav>
    );
}

export default Footer;