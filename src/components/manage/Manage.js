import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import '../Shop/Shop.css'
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
            Items in the cart 

            <br />
        {
            cart.map(product=><li >{product.name.substring(0,20)}  X {product.quantity}<button onClick={()=>{
                deleteProduct(product.id)
            }}>delete</button></li>)
        }

           </div>
           <div className='cart'>
 <Cart clearCart={deleteCart}   cart={cart}></Cart> 
 <Link to="/inventory"><button>Proceed Checkout</button></Link>
           </div>
        </div>
    );
};

export default Manage;