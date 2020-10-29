import React, { Component } from 'react';
import Animal from './Components/Animal/Animal';
import './App.css';

// Adding of class component. class comp. can do rendering inside the component, do not need to render whole app.
// State always as the first thing
class App extends Component {
  state = {
    animals: [
      { name: 'Snowy Owl', image: 'https://source.unsplash.com/E3XUdw2ohd4' },
      { name: 'Meerkat', image: 'https://source.unsplash.com/FQjmQgSoRyQ' },
      { name: 'Field Mouse', image: 'https://source.unsplash.com/ocFm38bEyTE' },
    ],
  };
  render() {
    return (
      <div className="cards">
        <Animal
          name={this.state.animals[0].name}
          image={this.state.animals[0].image}
        />
        <Animal
          name={this.state.animals[1].name}
          image={this.state.animals[1].image}
        />{' '}
        <Animal
          name={this.state.animals[2].name}
          image={this.state.animals[2].image}
        />
      </div>
    );
  }
}

export default App;
