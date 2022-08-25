import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink.js';
const Header = () => {
    return (
        <div className='header'>
          <img className='logo' src={logo} alt="" />
          <div className='menu'>
          
          <CustomLink to='/order'>Products </CustomLink>
          <CustomLink to='/inventory'>Order Inventory </CustomLink>
        
            <CustomLink to='/manage'>Manage Inventory</CustomLink>
            
          </div>
        </div>
    );
};

export default Header;