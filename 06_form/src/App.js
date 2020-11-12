import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <View/>
      </div>
    );
  }
}

export default App;