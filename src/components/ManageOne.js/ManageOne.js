import React from 'react';

const ManageOne = (props) => {

const    {id,name , img , ratings,quantity}= props.cart;
console.log(props);
    return (
        <div style={{border:"2px solid black", textAlign:"left", display:"flex", marginLeft:"30%", marginRight:"20%", justifyContent:"space-between"}}>
            <img src={img} alt="" />
          <div>  <h5>Name: {name} </h5>
           <h5>Quantity:{quantity}</h5>
           <h5><small>Rating:{ratings}/5</small></h5></div>

         <button onClick={props.deleteProduct}>Delete Item</button>  
        </div>
    );
};

export default ManageOne;
