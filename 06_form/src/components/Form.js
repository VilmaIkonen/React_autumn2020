import React from 'react';

const Form = () => {
    return (
        <div className="form">
            <div className="firstName">
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName"></input>
            </div>
            <div className="lastName">
                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName"></input>
            </div>
            <div className="phoneNumber">
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="number" name="phoneNumber"></input>
            </div>
            <div className="role">
                <label htmlFor="role">Role</label>
                <select>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="phoneNumber">
                <label htmlFor="message">Message</label>
                <textarea placeholder="Type your message here"></textarea>
            </div>
        </div>
    );
};

export default Form;