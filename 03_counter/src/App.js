import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //current time is added as state inside same {} as count:0
  state = { count: 0, curTime: new Date().toDateString() };
  //method to add count, will set number that is +1 bigger than current
  addHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //method to remove count. If prevents -values.
  removeHandler = () => {
    if (this.state.count <= 0) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };
  //method for reseting count
  resetHandler = () => {
    this.setState({ count: 0 });
  };

  render() {
    const isEven = this.state.count % 2 === 0;
    return (
      <div>
        <header>
          <div id="date">Date: {this.state.curTime}</div>
          <h1>Count your ...whatever</h1>
        </header>
        <main
          style={{
            backgroundColor:
              isEven % 2 === 0 ? 'rgb(174, 101, 114)' : 'rgb(175, 125, 140)',
          }}
          className={isEven ? 'even' : 'odd'}
        >
          <h2>Total: {this.state.count}</h2>
          <button onClick={this.addHandler}>Add one</button>
          <button onClick={this.removeHandler}>Remove one</button>
          <button onClick={this.resetHandler}>Reset</button>
        </main>
        <footer>
          <p>Copyright&copy; Vilma Ikonen 2020</p>
        </footer>
      </div>
    );
  }
}

export default App;
