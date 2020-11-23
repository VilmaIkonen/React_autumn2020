import React, { Component } from 'react';
import Form from './Components/Form';
import View from './Components/View';
import PopUp from './Components/PopUp';
import './App.css';

class App extends Component {

  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopUp: false
  };

	// Function used for passing data onwards when the form is changed
	handleChange = (event) => {
	this.setState({[event.target.name]: event.target.value});
  }  
  
  handleSubmit = (ev) => {    
    this.setState({showPopUp: true});
    ev.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Submission form</h1>
        <Form 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit} 
          role={this.state.role}
          />
        <View 
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}          
          role={this.state.role}
          message={this.state.message}
          />
     
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