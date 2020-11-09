import React, { Component } from 'react';

class Form extends Component {


state = {
    value: ""
}

changeValueHandler = (event) => {
    this.setState({value: event.target.value});
}

submitHandler = () => {
    alert("Inserted text was: " + this.state.value)
}

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input type="text" value={this.state.value} onChange={this.changeValueHandler}/>
                    {/* Button with input type */}
                    <input type="submit" value="Send"/>
                    <p>text from input:{this.state.value}</p>
                    </div>
                </form>
            </>
        );
    }
}

export default Form;