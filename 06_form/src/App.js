import React, { Component } from 'react';
import Form from './Components/Form';
import View from './Components/View';
import PopUp from './Components/PopUp';
import './App.css';

// App.js collects the data, in all components props is used to get the data
class App extends Component {

  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopUp: false
  };

	// Function used for passing data onwards when the form is changed. Data goes to View and PopUp
	handleChange = (event) => {
	this.setState({[event.target.name]: event.target.value});
  }  
  
  // with submit, popup is shown
  // by default submit clears reloads/clears the page. --> preventDefault() needed!
  handleSubmit = (ev) => {    
    this.setState({showPopUp: true});
    ev.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Submission form</h1>
        <Form 
        // every time there is some change in the form, will look for handleChange(). all changes will be saved in the state
          change={this.handleChange} 
          submit={this.handleSubmit} 
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
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}          
          role={this.state.role}
          message={this.state.message}
        /> 
      </div>
    );
  }
}

export default App;