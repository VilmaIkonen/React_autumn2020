import React, { Component } from 'react';
import Circle from './Components/Circle'
import GameOver from './Components/GameOver'
import './App.css'

// Creating random number, in global scope. +1 = will include also max
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min +1) + min);
}

// All states are added under here. 
// Score starts from 0. 
// Current = currently selected button
class App extends Component {
  state = {
    score:0,
    current: 0,
    showGameOver: false,
      circles:[
      {id:1, color:"bg1"},
      {id:2, color:"bg2"},
      {id:3, color:"bg3"},
      {id:4, color:"bg4"}
    ],
  }
  
  // Setting pace(fast/slow) and timer
  pace = 1500;
  timer = undefined;

  // Finding and passing data to the event.  
  clickHandler = (id) => {

    function playClickSound(){
      let clickSound = new Audio('/assets/clickSound.wav');
      clickSound.play();
    }

    console.log("Wow, you clicked circle no. " + id);
    // If currently selected circle does not match the clicked id, game over
    if (this.state.current !== id){
      this.stopHandler();
      return;
    }
    // Increasing the score
    this.setState({
      score: this.state.score + 1,
      rounds:0
    })
  };

  
  // --- Function for defining next circle and all actions linked to it ----- //
   
  nextCircle = () => {

    // if >5  empty rounds, stop game
    if (this.state.rounds >= 5){
      this.stopHandler();
      return;
    }
    
    // nextActive at beginning as undefined.
    let nextActive = undefined;

    // Next highlighted circle with do-while-loop. First round will be always executed as condition is not given until while block
    do {
      nextActive = getRandomInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds +1,
    });

    // Every time circle is clicked, the pace gets faster. Initially 1500 ms.
    this.pace *= 0.97

    // Timer with setTimeout method. Example from W3schools: setTimeout(function(){ alert("Hello"); }, 3000);
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log('Active circle is: ', this.state.current)
  }

  // Starts nextCircle function 
  starthandler = () => {
    this.nextCircle();
  }
   
  // Stops 
  stopHandler = () => {
    clearTimeout(this.timer);
    // Trickering the gameover overlay
    this.setState({showGameOver: true});
  }

  render() {

    const circles = this.state.circles.map((item) => {
      return (
      <Circle 
        key = {item.id} 
        color = {item.color} 
        click= {() => this.clickHandler(item.id)}
        active = {this.state.current === item.id}
      />
      )
    });

    return (
      <div className="App">          
        <h1>Fast enough to catch the owl?</h1>
        <h2>Click the owl when it opens the eyes</h2>
        <p>Your score: {this.state.score}</p>
        <div>
          {circles}
        </div>
        <button onClick={this.starthandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button> 
        {/* Conditional rendering: if game over is true -->  + passing the score to gameover component */}
        {this.state.showGameOver && <GameOver score={this.state.score} /> }  
      </div>
    );
  }
}

export default App;