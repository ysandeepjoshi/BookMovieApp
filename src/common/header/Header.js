import './Header.css';
import React from 'react';
import logo from '../../assets/logo.svg'; 
 const Header = (props) =>{
    return (
          <div className="header-custom">
              <span><img className="logo image-rotate" src={logo} alt="logo was here"></img></span></div>
    )
}
export default Header;