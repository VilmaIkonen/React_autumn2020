import React from 'react';


const Form = ({ onChange, onSubmit, role }) => {
	return (
		<div className="form">
			<form onSubmit= {onSubmit}>
				<div>
					<label htmlFor="firstname">First name</label>
					<input 
						type="text" 
						name="firstname" 
						id="firstname"
						onChange={onChange}
						required
					/>	
				</div>
				<div>
					<label htmlFor="lastname">Last name</label>
					<input 
						type="text" 
						name="lastname" 
						id="lastname"
						onChange={onChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="phonenumber">Phone number</label>
					<input 
						type="number" 
						name="phonenumber" 
						id="phonenumber"
						onChange={onChange}
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
						onChange={onChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="role">Role</label>
					<select name="role" value={role} onChange={onChange}>
						<option value="Teacher">Teacher</option>
						<option value="Student">Student</option>
						<option value="Other">Other</option>
					</select>	
				</div>	
				<div>
					<input type="submit" value="send"/>
				</div>		
			</form>
		</div>
	);
};

export default Form;