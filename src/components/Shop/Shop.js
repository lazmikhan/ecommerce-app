import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product.js/Product';
import './Shop.css'
const Shop = () => {
  

 
    const [products , setProducts]= useState([]);
    const [cart, setCart]= useState([]);
    const [command, setCommand]= useState("");
   
   
    const deleteCart=(products)=>{
        deleteShoppingCart();
    products=[];
    
    setCart(products);
    }
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
var total=0;
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

        
if(cart.length==0)
{
 
}
            
                return (
                    <div className='shop'>
                       
                     <div className='product'>
                      
               
            
                     <div className='map-product'>{products.map(product=><Product key={product.id} handleAddToCart={btnClick} product={product}></Product>)}
                     
                     </div>
                    
                        </div> 
                        <div className='cart'>
                          
       <Cart clearCart={deleteCart}  cart={cart}>
  <Link to="/manage"><button>Review Item</button></Link>
       </Cart>
       
                        
                 
                            </div>  
                    </div>
                );
            
          
};

export default Shop;
