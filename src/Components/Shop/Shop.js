import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css';
const Shop = () => {
    //for food
    const [foods,setFoods]=useState([])
    //for cart
    const [cart,setCart]=useState([])
    //useeffect for food
    useEffect( ()=>{
        fetch('food.json').then(res=>res.json()).then(data=>setFoods(data))
    },[]);
    //add handle for cart work
    const handleaddtocart=(food)=>{
        let newCart = [];
     newCart=[...cart,food];
   
    setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='food-container'>
             {
                 foods.map(food=><Food key={food.id} food={food} handleaddtocart={handleaddtocart} >

                 </Food>)
             }
            </div>
            <div className='cart-container'>
                
             <Cart cart={cart}></Cart>
            </div>
        </div>

        
    );
};

export default Shop;