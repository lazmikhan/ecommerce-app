import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';


const Inventory = () => {
    const isNotZero=()=>{

    }

    const [products, setProducts]= useProducts();
    const [cart, setCart] =useCart(products);
    let sumQuantity=0;
    let tax =0.2;
    let totalSum=0;
    let q=0;
    let grandTOtal;
    for(let quanTotal of cart)
{
  
    sumQuantity= sumQuantity+ parseInt(quanTotal.quantity);
}

for(const oneItem of cart)
{ 
    totalSum = totalSum + parseFloat(oneItem.price)*oneItem.quantity;
  
}
q= totalSum+ tax*totalSum;
const payBill=()=>
{
if(q==0)
{
    alert("Add some items first!")
    return;
}
    
if(window.confirm("Pay Bill"))
{
    alert("The Bill has been paid!");

    deleteShoppingCart();
    document.location.reload();
}



}
    return (
        <div style={{marginLeft:"25%",marginRight:"25%"}}>
         <b>Order Summary</b>
             <p><b>Number of items :</b>{sumQuantity}</p> 
             <p><b>Price :</b> {totalSum}</p>  
             <p><b>Taxes :</b> {tax*totalSum.toFixed(2)}</p> 
        <p><b>Grandtotal :</b> {q}</p>
        <button  onClick={payBill}>Pay The Bill</button>
        </div>
    );
};

export default Inventory;