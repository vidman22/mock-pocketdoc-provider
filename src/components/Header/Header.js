import React from 'react';
import LogoGrey from '../../img/logo-grey.png';

import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container hide-on-mobile">
        	<div className="logo-container">
        		<img src={LogoGrey}/>
        	</div>
            
        	<ul className="nav-links">
                <li>
                    <NavLink activeClassName="selected" to="/waiting-room">Waiting Room</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/patient-director">Patient Directory</NavLink> 
                </li>
                <li>
                    <div onClick={() => console.log('log out')}>Log off</div> 
                </li>
        	</ul>
       
            <div id="headerContainer" className="bg-white static-header-wrapper mobile-only-container">
            
            <div className="bg-white section-wrapper header-main">
            
                <div className="static-header-container">
                    <div className="logo-item">
                        <img src={LogoGrey}/>
                    </div>
            
                    <ul className="box-shadow nav-links" id="navLinks">
                        <li>
                            <NavLink activeClassName="selected" to="/waiting-room">Waiting Room</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" to="/patient-director">Patient Directory</NavLink> 
                        </li>
                        <li>
                            <div onClick={() => console.log('log out')}>Log off</div> 
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Header;
