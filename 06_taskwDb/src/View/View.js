import React from "react";
import "./View.css";

const View = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="view">
      <h1>Check your input</h1>
      <div className="notepad">
        <p>
          First name <span>{firstname}</span>
        </p>
        <p>
          Last name <span>{lastname}</span>
        </p>
        <p>
          Phone number <span>{phonenumber}</span>
        </p>
        <p>
          Message <span>{message}</span>
        </p>
        <p id="lastRow">
          Role <span>{role}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
