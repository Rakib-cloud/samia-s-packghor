import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const {cart}=props;
    //console.log(cart);
   //console.log(cart[0].name);
//    const {name}=cart[0].name;
//    console.log(name);
// let name;
// for(const food of cart){
//     name=food.name;
    
// }


    return (
      
        <div className='cart'>
            <h3>Food order Summary</h3>
            <p>food length:{cart.length}</p>
            <h5>order food list:</h5>
            <div>{cart.map(food =>
    <h2>{food.name}</h2>
)}</div>
            
        </div>
    );
};

export default Cart;