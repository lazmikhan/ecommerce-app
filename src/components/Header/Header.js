import React from 'react';
import './Header.css';
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink.js';
import useFirebase from '../useHooks/useFirebase';
const Header = () => {

  const {user,handleSignOut}= useFirebase();
    return (
        <div className='header'>
          <div style={{display:"flex"}}>
          <img className='logo' src={logo} alt="" />
{user?.uid?<>
  <h5 className='mt-2'>{user.displayName}</h5>
  <button onClick={handleSignOut}>Sign Out</button>
</>: <>
<CustomLink to='/login'>Login </CustomLink>
<CustomLink to='/register'>Register </CustomLink>
</>}
        
   
          </div>
          <div className='menu'>
          
          <CustomLink to='/order'>Products </CustomLink>
          <CustomLink to='/inventory'>Order Inventory </CustomLink>
        
            <CustomLink to='/manage'>Manage Inventory</CustomLink>
            
          </div>
        </div>
    );
};

export default Header;