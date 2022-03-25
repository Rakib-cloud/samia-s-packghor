import React from 'react';
import './Food.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    //console.log(props);
    const {name,price,image}=props.food;
    
    return (
        <div className='food'>
            <img src={image} alt="" />
            <div className='food-info'>
            <p className='food-name'>{name}</p>
            <p>price:{price}</p>
            
            </div>
            <button onClick={()=>props.handleaddtocart(props.product)} className='btn-cart'>
                <p >Add to cart</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Food;