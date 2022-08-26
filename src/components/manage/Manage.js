import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
import ManageOne from '../ManageOne.js/ManageOne';
const Manage = () => {
  
     const [products, setProducts]= useProducts();
     const [cart, setCart] =useCart(products);
     let sum=0;

 const deleteCart=(products)=>{
    deleteShoppingCart();
products=[];

setCart(products);
}
    const deleteProduct=(id)=>{

        const allProducts=cart.filter(product=> product.id!==id);
        const theProducts=cart.find(product=> product.id==id);
       
         if(theProducts.quantity>0 )
         {
             theProducts.quantity= theProducts.quantity-1; 
             const newCart = [...allProducts, theProducts];
             setCart(newCart);
             if(theProducts.quantity==0)
             {

                const cartZero =[...allProducts];
                setCart(cartZero);
             }    
             
         }
          
     
         removeFromDb(id);
        
          }


for(let quanTotal of cart)
{
  
  sum= sum+ parseInt(quanTotal.quantity);
}


    return (
        <div className='shop'>
        
           
           <div className='product'>
            <h3>Items in the cart </h3>

            <br />
        {
            cart.map(product=><ManageOne cart={product} deleteProduct={()=>{
                deleteProduct(product.id)
            }} ></ManageOne>)
        }

      

           </div>
           <div className='cart'>
 <Cart clearCart={()=>{
    deleteCart(products)
 }}   cart={cart}></Cart> 
 <Link  to="/inventory"><button>Proceed Checkout</button></Link>
           </div>
        </div>
    );

};

export default Manage;