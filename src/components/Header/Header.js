import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
          <img className='logo' src={logo} alt="" />
          <div className='menu'>
          
            <a href="">Order</a>
            <a href="">Order Inventory</a>
            <a href="">Manage Inventory</a>
          </div>
        </div>
    );
};

export default Header;