import React from 'react';
import './App.css';
import Animals from './Animal component/Animal';

function Content() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Content />
      <Animals />
    </div>
  );
}

export default App;
