import React from 'react';

const Box = (props) => {
    return (
    <div className="box">
        <p className="name">{props.name}</p>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
    </div>
    );
};

export default Box;