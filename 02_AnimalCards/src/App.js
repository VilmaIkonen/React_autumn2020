import React from 'react';
import Animal from './Components/Animal/Animal';
import './App.css';

const App = () => {
  return (
    <div className="cards">
      <Animal
        name="Snowly Owl"
        image="https://source.unsplash.com/DvZpQRpirlo"
      />
      <Animal name="Meerkat" image="https://source.unsplash.com/FQjmQgSoRyQ" />
      <Animal
        name="Field Mouse"
        image="https://source.unsplash.com/ocFm38bEyTE"
      />
    </div>
  );
};

export default App;
