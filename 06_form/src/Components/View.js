import React from 'react';
import './View.css';

const View = ({firstname, lastname, phonenumber, role, message}) => {
    return (
      <div className="view">
        <h2>Your input to the form: </h2>
        <form>          
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
        </form>
      </div>
    );
};

export default View;