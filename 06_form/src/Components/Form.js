import React, { Component } from 'react';

class Form extends Component {

	// Function for showing the popup
	handleSubmit = () => {   
	this.setState({showPopUp: true});
	}

	render() {
		return (
			<form>
				<div>
					<label htmlFor="firstname">First name</label>
					<input type="text" name="firstname" onChange={this.handleChange}/>	
				</div>
				<div>
					<label htmlFor="lastname">Last name</label>
					<input type="text" name="lastname" onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="phonenumber">Phone number</label>
					<input type="number" name="phonenumber" min="0" onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea name="message" onChange={this.handleChange}></textarea>
				</div>
				<div>
					<label htmlFor="role">Role</label>
					<select name="role" onChange={this.handleChange}>
						<option value="teacher">Teacher</option>
						<option value="student">Student</option>
						<option value="other">Other</option>
					</select>		
				</div>		
			</form>
		);
	}
}

export default Form;