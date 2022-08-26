import React from 'react';
import { useState } from 'react';
import './Cart.css';
const Cart = (props) => {
  var sum=0;
  var total=0;
  let tax =0.2;
  
let q=0;
let {price , img, quantity}=props.cart;
for(let oneItem of props.cart)
{ quantity= quantity+oneItem.quantity;
  sum = sum + parseFloat(oneItem.price)*oneItem.quantity;
  
}
var taxes = sum*tax;
total= sum+(sum *tax);


for(let qt of props.cart)
{
q=q+qt.quantity;
}






            return (
                <div>
                  <b>Order Summary</b>
             <p><b>Number of items :</b>{q}</p> 
             <p><b>Price :</b> {sum}</p>  
             <p><b>Taxes :</b> {taxes.toFixed(2)}</p> 
        <p><b>Grandtotal :</b> {total}</p>
                <button onClick={()=>{
                  props.clearCart(props.cart)
                }}>Clear Cart</button>

                {props.children}
                 
                   
                </div>
            );
        

    


  
};

export default Cart;