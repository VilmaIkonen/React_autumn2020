import React, { Component } from 'react';
import Form from './Components/Form';
import View from './Components/View';
import PopUp from './Components/PopUp';
import './App.css';

class App extends Component {

  state = {
    firstname: null,
    lastname: null,
    phonenumber: null,
    role: null,
    message: "Type your message here",
    showPopUp: false
  };

	// Function for passing the data from...?
	handleChange = (event) => {
	event.preventDefault();
	this.setState({[event.target.name]: event.target.value});
	}  

  render() {
    return (
      <div className="App">
        <h1>Submission form</h1>
        <Form 
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
          onChange={this.handleChange}
          />
        <View/>
     
        <PopUp
          // firstname={this.state.firstname}
          // lastname={this.state.lastname}
          // phonenumber={this.state.phonenumber}          
          // role={this.state.role}
          // message={this.state.message}
        /> 
      </div>
    );
  }
}

export default App;