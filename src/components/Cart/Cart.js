import React from 'react';
import { useState } from 'react';
import './Cart.css';
const Cart = (props) => {
const {img}= props.cart;


            return (
                <div>
                
                  <img src={props.img} alt="" />  
                    <p>Name: {props.name} X {props.quantity}</p>
                   <p> Price:{props.price}</p>
                   
                </div>
            );
        

    


  
};

export default Cart;