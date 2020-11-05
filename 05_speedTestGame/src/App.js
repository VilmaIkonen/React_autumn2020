import React, { Component } from 'react';
import Circle from './Components/Circle'

class App extends Component {
  state = {
    circles:[
      {id:1, color:"green"},
      {id:2, color:"red"},
      {id:3, color:"blue"},
      {id:4, color:"orange"}
    ],
  }
  render() {

    const circles = this.state.circles.map(item => {
      /* every circle: key and color */
      return <Circle key = {item.id} color = {item.color}/>;

    });

    return (
      <div className="App">          
        <h1>Speed Game</h1>
        <p>Your score:</p>
        <div>
          {circles}
        </div>
        <button>Start</button>
        <button>Stop</button>     
      </div>
    );
  }
}

export default App;