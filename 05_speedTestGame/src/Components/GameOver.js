import React from 'react';
import './GameOver.css'

// Will clear the window when close button is clicked
const closeHandler = () => {
    window.location.reload();
}

const gameOver = (props) => {
    return (
        <div className="overlay">
            <div className="gameOverBox">
                <h2>Ouch! Faster and more accurate next time?</h2>
                <p>Your score was: {props.score}</p>  
                <button onClick={closeHandler}>Close</button> 
                {/* "this" is not used with closehandler on button as it is not a class component!                 */}
            </div>
                
        </div>
    );
};

export default gameOver;

