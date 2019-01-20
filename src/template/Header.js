import React, { Component } from 'react';
import './header.css';
import{
    Link
  } from 'react-router-dom';

class Header extends Component {
    openNav(){
      
    }
  
    
    render() {
      return (
        <div className="header-section">
          <div className="company-name">
            <label className="gray-30p">
              <Link to= '/' style={{ textDecoration: 'none' }}>SEKO
              </Link>
            </label>
          </div>
          <div className="icon">
            <img src={require('./../img/icon.png')} />
          </div>
          <div className="language">Chinese</div>
          <div className="nav-btn">&#9776;</div>
          <div className="header-nav">
            <li><Link style={{ textDecoration: 'none' }} to= '/product'> Product </Link></li>
            <li><Link style={{ textDecoration: 'none' }} to= '/profile'> Profile </Link></li>
            <li><Link style={{ textDecoration: 'none' }} to= '/contact'> Contact </Link></li>
          </div>
      </div>
      );
    }
}

export default Header;

