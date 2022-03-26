import React, { useEffect } from 'react';
import './Cart.css';


const Cart = (props) => {
    const {cart}=props;
    
    
let index=[];
//console.log(cart.id);
cart.map(food=>{
    index.push(food.id);
})
console.log(Math.floor(Math.random() * 4))

//randome wise food selected work 
function randomwise(cart){
    let randname='';
    console.log(cart)
    cart.map(food=>{
        
        if(cart.length==4){
            if(index[Math.floor(Math.random() * 4)]===food.id){
                randname=food.name;
                document.getElementById('rand').innerText=randname;
            }
            
        }
       
    })
    
}


    return (
      
        
        <div className='cart'>
             <div id='c' >
            <h3>Food order Summary</h3>
            <p>Your total selected food:{cart.length}</p>
            <h5>Order food list:</h5>
            <div>{cart.map(food =>
    <h2 key={food.id}>{food.name}</h2>
)}</div>
<button onClick={()=>{randomwise(cart)}}>Get one food</button>
           
           <h2>Our Suggested food for you:</h2>
           <p id='rand'></p>
            
        </div>
        
        </div>
    );
};

export default Cart;