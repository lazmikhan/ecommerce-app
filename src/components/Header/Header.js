import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
          <img className='logo' src={logo} alt="" />
          <div className='menu'>
          
          <Link to='/order'>Products </Link>
          <Link to='/inventory'>Order Inventory </Link>
          <Link to='/manage'>Manage Inventory </Link>
            
            
          </div>
        </div>
    );
};

export default Header;