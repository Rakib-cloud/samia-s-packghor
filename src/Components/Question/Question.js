import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='ques'>
            <div className='ques1'>
                <h2>How React Works?</h2>
                <p>If there are numerous state changes, React does not commit them in order. React, on the other hand, walks through its virtual DOM, makes a list of the modifications that need to be applied to the actual DOM, and then performs everything in one step. React does batch updates, to put it another way.!</p>
            </div>
            <div className='ques2'>
                <h2>How Usestate works</h2>
                <p>useState is a Hook that enables state variables being used in functional components. This function will take the initial state and generates a variable with the current state value (not necessarily the starting state) and another function to update it.</p>
            </div>
           
        </div>
    );
};

export default Question;