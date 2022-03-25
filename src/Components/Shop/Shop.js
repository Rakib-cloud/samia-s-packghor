import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Shop.css';
const Shop = () => {
    const [foods,setFoods]=useState([])
    useEffect( ()=>{
        fetch('food.json').then(res=>res.json()).then(data=>setFoods(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='food-container'>
             {
                 foods.map(food=><Food key={food.id} food={food} >

                 </Food>)
             }
            </div>
            <div className='cart-container'>
             <h3>Selected Food</h3>
            </div>
        </div>

        
    );
};

export default Shop;