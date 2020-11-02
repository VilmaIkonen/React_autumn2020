import React from 'react';
import './Animal.css';

const greetingText = (name) => {
  console.log(name);
  alert(`Hello! I'm ${name}. Nice to meet you!`);
};

const Animal = (props) => {
  return (
    <div className="animalCards">
      <h1>{props.name}</h1>
      <img alt={props.name} src={props.image} />
      <button onClick={() => greetingText(props.name)}>Click me!</button>
    </div>
  );
};

export default Animal;

//<button onClick={() => greetingText(props.name)}>Click me!</button> This allows to pass data to a child and from child to an event
