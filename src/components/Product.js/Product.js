import React from 'react';
import './Product.css';
const Product = (props) => {
    const      {id , category,name,img,price,ratings} = props.product;
    
const {handleAddToCart}=props;
    return (
        <div className='prod'>
            <div className='desc'>
            {/* <img className='product-img' src={img} alt="" /> */}

<p className='name'> Product Name: {name}</p>
<p>Category : {category}</p>
<p>Price : {price}</p>
<p>Rating: {ratings}</p>
<p>Product id: {id.substring(0,6)}</p>
            </div>
   <button onClick={()=>{
    handleAddToCart(props.product)
   }} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Product;