import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <p style={{fontSize: "10px"}} className="margin-none">{props.version}</p>
        </div>
    );
}

export default Footer;
