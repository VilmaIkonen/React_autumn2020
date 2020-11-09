import React, { Component } from 'react';

class Form extends Component {

state = {
    firstname: "",
    lastname: ""
}

changeValueHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

submitHandler = () => {
    alert("firstname: " + this.state.firstname +  ", lastname: " + this.state.lastname);
}

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" name="firstname" onChange={this.changeValueHandler}/>
                        {/* Button as input type */}
                        <input type="submit" value="Send"/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name="lastname" onChange={this.changeValueHandler}/>
                        {/* Button as input type */}
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </>
        );
    }
}

export default Form;