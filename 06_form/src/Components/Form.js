import React from 'react';
import './Form.css';

// Data input is in the Form
// App.js collects the data, in all components props is used to get the data
// props have been destructured in all components
const Form = ({ change, submit, role }) => {
	return (
		<div className="form">
	{/* submit can be done on <button> or normally in forms input type submit is used Then onSubmit can be used */}
			<form onSubmit= {submit}>
				<div>
					<label htmlFor="firstname">First name</label>
					<input 
						type="text" 
						name="firstname" 
						id="firstname"
						onChange={change}
						required
					/>	
				</div>
				<div>
					<label htmlFor="lastname">Last name</label>
					<input 
						type="text" 
						name="lastname" 
						id="lastname"
						onChange={change}
						required
					/>
				</div>
				<div>
					<label htmlFor="phonenumber">Phone number</label>
					<input 
						type="number" 
						name="phonenumber" 
						id="phonenumber"
						onChange={change}
						required
						min="0"
					/>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea 
						type="text" 
						name="message" 
						id="message"
						onChange={change}
						required
					/>
				</div>
				<div>
					<label htmlFor="role">Role</label>
					<select name="role" value={role} onChange={change}>
						<option value="Teacher">Teacher</option>
						<option value="Student">Student</option>
						<option value="Other">Other</option>
					</select>	
				</div>	
				<div>
					<input 
						id="sendButton" 
						type="submit" 
						value="Send"/>
				</div>		
			</form>
		</div>
	);
};

export default Form;