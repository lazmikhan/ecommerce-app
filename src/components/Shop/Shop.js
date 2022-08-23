import React, { createRef } from 'react';

import { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product.js/Product';
import './Shop.css'
const Shop = () => {

    const [products , setProducts]= useState([]);
    const [cart, setCart]= useState([]);
    var [number , setNumber]= useState(0);
    useEffect(()=>{

        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data));
    }, []);

    useEffect(()=>{

        const storedCart=getStoredCart();
        const savedCart =[];
        for(const id in storedCart)
        {
           const addedProduct= products.find(product=>product.id==id)
           if(addedProduct)
           {
            addedProduct.quantity = storedCart[id];
            
            savedCart.push(addedProduct);
           
           }
        }
        setCart(savedCart);
    },[products])

var click=1;
var sum=0;
const tax =0.2;
let quantity =0;
var grandTOtal;
    const btnClick=(selectedProduct)=>{
   const exists = cart.find(product=>product.id===selectedProduct.id);
   let newItems=[];
   if(!exists)
   {
    selectedProduct.quantity= 1;
    newItems= [...cart, selectedProduct];
   }
     else{

        const rest= cart.filter(product=>product.id!==selectedProduct.id);
        exists.quantity = exists.quantity+1;
        newItems=[...rest, exists];
     }   
         setCart(newItems);
        addToDb(selectedProduct.id);
      
            }
          
           
          for(const oneItem of cart)
          { quantity= quantity+oneItem.quantity;
            sum = sum + parseFloat(oneItem.price)*oneItem.quantity;
            
          }
var taxes = sum*tax;
          grandTOtal= sum+(sum *tax);

        

            
                return (
                    <div className='shop'>
                     <div className='product'>
                      
               
            
                     <div className='map-product'>{products.map(product=><Product key={product.id} handleAddToCart={btnClick} product={product}></Product>)}</div>
                    
                        </div> 
                        <div className='cart'>
                           <h3> Order summary</h3>
        {cart.map(oneItem=><Cart name={oneItem.name} price={oneItem.price} img={oneItem.img} quantity={oneItem.quantity}  stateChange={click++} cart={cart}></Cart>)}
                            <h4>Total Price:$ {sum}</h4>
                            <h4>Taxes:${taxes}</h4>
                            <h3 className='margin'>Grand Total:$ {grandTOtal}</h3>
                 
                            </div>  
                    </div>
                );
            
          
};

export default Shop;
