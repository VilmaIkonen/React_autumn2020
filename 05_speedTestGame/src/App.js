import React, { Component } from 'react';
import Circle from './Components/Circle'
import GameOver from './Components/GameOver'

//creating random number. in global scope. +1 = will include also max
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min +1) + min);
}

// all states are added under same "state". score starts from 0. 
class App extends Component {
  state = {
    score:0,
    current: 0,
    showGameOver: false,
    circles:[
      {id:1, color:"green"},
      {id:2, color:"red"},
      {id:3, color:"blue"},
      {id:4, color:"orange"}
    ],
  }
  
  //setting pace(fast/slow) and timer
  pace = 1500;
  timer = undefined;

  // finding and passing data to the event. Increasing the score number. 
  clickHandler = (id) => {

    console.log("Wow, you clicked circle no. " + id);
// are clicked and id same, if not, game over
    if (this.state.current !== id){
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 1,
      rounds:0
    })
  };

  //Function gives next highlighted circle with do-while-loop.
  //Defining nextActive at beginning as undefined. 
  nextCircle = () => {
 //if >5  empty rounds, stop game
    if (this.state.rounds >= 5){
      this.stopHandler();
      return;
    }

    let nextActive = undefined;
  
    do {
      nextActive = getRandomInteger(1, 4);
    }
    while (nextActive === this.state.current)
    this.setState({
      current: nextActive,
      rounds: this.state.rounds +1,
    });

    //every time you click, the pace gets faster. Initially 1500 ms.
    this.pace *= 0.95

    //timer with setTimeout method. exapmle fomr W3schools: setTimeout(function(){ alert("Hello"); }, 3000);
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log('Active circle is: ', this.state.current)
  }
// starts nextCircle function, 
  starthandler = () => {
    this.nextCircle();
  }
//stops 
  stopHandler = () => {
    clearTimeout(this.timer);
    //trickering the gameover overlay
    this.setState({showGameOver: true});
  }

  render() {

    const circles = this.state.circles.map(item => {
      /* every circle: key, color and event named as "click" */
      return (
      <Circle 
        key = {item.id} 
        color = {item.color} 
        click= {() => this.clickHandler(item.id)}
        // 
        active = {this.state.current === item.id}
      />
      /* "click" defined in Circle.js*/
      )
    });

    return (
      <div className="App">          
        <h1>Speed Game</h1>
        <p>Your score: {this.state.score}</p>
        <div>
          {circles}
        </div>
        <button onClick={this.starthandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button> 
        {/* Conditional rendering: if game over is true -->  + papssing the score to gameover component */}
        {this.state.showGameOver && <GameOver score={this.state.score} />  }  
      </div>
    );
  }
}

export default App;