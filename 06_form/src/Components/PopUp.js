import React from 'react';

const PopUp = ({firstname, lastname, phonenumber, message, role}) => {

	const handleClose = () => {
		window.location.reload();
	}


	return (
		<form>
			<h2>The info you submitted: </h2>
			<div className="firstname">
					<label htmlFor="firstname">First name</label>
					<p>{firstname}</p>
			</div>
			<div className="lastname">
					<label htmlFor="lastname">Last name</label>
					<p>{lastname}</p>
			</div>
			<div className="phonenumber">
					<label htmlFor="phonenumber">Phone number</label>
					<p>{phonenumber}</p>
			</div>            
			<div className="message">
					<label htmlFor="message">Message</label>
					<p>{message}</p>
			</div>
			<div className="role">
					<label htmlFor="role">Role</label>
					<p>{role}</p>
			</div>
			<button onClick={handleClose}>Close</button>
		</form>
	);
};

export default PopUp;