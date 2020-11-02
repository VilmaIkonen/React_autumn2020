import React, { Component } from 'react';
import Animal from './Components/Animal/Animal';
import './App.css';

class App extends Component {
  state = {
    animals: [
      { id:1, name: 'Snowy Owl', image: 'https://source.unsplash.com/E3XUdw2ohd4' },
      { id:2, name: 'Meerkat', image: 'https://source.unsplash.com/FQjmQgSoRyQ' },
      { id:3, name: 'Field Mouse', image: 'https://source.unsplash.com/ocFm38bEyTE' },
      { id:4, name: 'Moose', image: 'https://source.unsplash.com/XIqCrFOqf5A' },
      { id:5, name: 'Otter', image: 'https://source.unsplash.com/JVlvRfTBMLo' },
      { id:6, name: 'Lynx', image: 'https://source.unsplash.com/rtypYCit-hw' }
    ],
  };
  render() {
    const animalsList= this.state.animals.map((animal) => {
      return <Animal key={animal.id} name={animal.name} image={animal.image} />;
    })
    return (
      <div className="cards">{animalsList}

      </div>
    );
  }
}

export default App;
