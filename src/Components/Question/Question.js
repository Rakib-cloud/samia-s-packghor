import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='ques1'>
                <h2>How React Works?</h2>
                <p>If there are numerous state changes, React does not commit them in order. React, on the other hand, walks through its virtual DOM, makes a list of the modifications that need to be applied to the actual DOM, and then performs everything in one step. React does batch updates, to put it another way.!</p>
            </div>
            <div className='ques2'>
                <h2>How Usestate works</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex quae totam perferendis possimus velit quos consequuntur magnam ea labore?</p>
            </div>
           
        </div>
    );
};

export default Question;