import React, { Component } from 'react';
import Box from './Box'
import './App.css'

class App extends Component {
  state = {
    persons : [
      {id:1, name:'Mary', title:'XYZ', age:30}, 
      {id:1, name:'James', title:'LMN', age:43}, 
      {id:1, name:'Lisa', title:'RST', age:44}
    ],
  };
  render() {
      const personsList = this.state.persons.map((person) => {
        return <Box key={person.id} name={person.name} title={person.title} age={person.age} />
      })
      return(<div className="boxes">{personsList}</div>
    );
  }
}

export default App;
