import React from 'react';
import './Food.css';

const Food = (props) => {
    //console.log(props);
    const {name,price,image}=props.food;
    
    return (
        <div className='food'>
            <img src={image} alt="" />
        </div>
    );
};

export default Food;