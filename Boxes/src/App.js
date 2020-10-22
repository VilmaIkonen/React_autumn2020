import React from 'react';
import logo from './logo.svg';
import './App.css';

const greeting = 'Yey!';
const personalGreeting = 'Way to go (wo)man!';

/* Making component for boxes */
function Box(props) {
  return (
    <div className="box">
      <p>{props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
      {personalGreeting}
    </div>
  );
}

/* all below will be shown on the page */

function App() {
  return (
    <div className="App">
      {greeting}
      <Box name="Vilma" title="CEO, Lead Dev" age="42" />
      <Box name="Eino" title="QA Lead" age="9" />
      <Box name="Ville" title="Fullstack Dev" age="9" />
    </div>
  );
}

export default App;
