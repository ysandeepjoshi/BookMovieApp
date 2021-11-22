import './Header.css';
import React from 'react';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
 const Header = (props) =>{
    return (
          <div className="header-custom">
              <span><img className="logo image-rotate" src={logo} alt="logo was here"></img></span>
              <Button color="default" variant="contained">Login/Logout</Button>
              <Button color="default" variant="contained">Book Movie</Button>
              </div>
    )
}
export default Header;