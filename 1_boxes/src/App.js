import React from 'react';
import './App.css';

/* Making component for boxes */
function Box(props) {
  return (
    <div className="box">
      <p>{props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

/* all below will be shown on the page */
function App() {
  return (
    <div className="App">
      <Box name="Vilma" title="Future Web Developer" age="Young at heart" />
      <Box name="K.E.I." title="Curious Scientist" age="Forever young" />
      <Box name="E.O.V.I." title="Explorer" age="10" />
      <Box name="V.O.E.I." title="Tester" age="10" />
      <Box name="Nelli The Dog" title="Entertainer" age="1" />
    </div>
  );
}

export default App;
