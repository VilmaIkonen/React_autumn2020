import React from 'react';

const View = (props) => {
    return (
        <div className="view">
        <h2>Your input to the form: </h2>
        <div className="firstname">
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" />
        </div>
        <div className="lastname">
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname"></input>
        </div>
        <div className="phonenumber">
            <label htmlFor="phonenumber">Phone number</label>
            <input type="number" name="phonenumber"></input>
        </div>            
        <div className="message">
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
        </div>
        <div className="role">
            <label htmlFor="role">Role</label>
            <select name="role">
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
        </div>
        <button type="submit">Submit</button>
    </div>
    );
};

export default View;