import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { likes: 0 };

  //method to add likes
  addHandler = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  //method to remove likes. Math.max prevents -values. Math.max return the bigger of two values, if value <0, returns 0
  removeHandler = () => {
    this.setState((prevState) => ({ likes: Math.max(prevState.likes - 1, 0) }));
  };
  //method for reseting likes
  resetHandler = () => {
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Count your... whatever</h1>
        </header>
        <h2>Total: {this.state.likes}</h2>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
        <footer>
          <p>Copyright&copy; VW 2020</p>
        </footer>
      </div>
    );
  }
}

export default App;
