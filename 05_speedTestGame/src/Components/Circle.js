import React from 'react';
import './Circle.css'

const Circle = (props) => {
    return (
        // passing attribute, not the event itself click (could be whatever, as long as same is used in App.js)  

        // checking if props is active or not. if active --> add class .active, if not, do nothing
        <div className= {`circle ${props.color} ${props.active ? " active" : ""}`} onClick={props.click} > 
        </div>
    );
};

export default Circle;