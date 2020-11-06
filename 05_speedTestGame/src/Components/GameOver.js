import React from 'react';
import './GameOver.css'
import useSound from 'use-sound'
import owlHowl from '../assets/owlHowl.mp3'

// Will clear the window when close button is clicked

const GameOver = (props) => {   
    
    const closeHandler = () => {
        window.location.reload();
    }

    const [play] = useSound(owlHowl);
    
    return (
        <div className="overlay">
            <div className="gameOverBox" onMouseOver={play}>
                <h2>Ouch! Faster and more accurate next time?</h2>
                <p>Your score was: {props.score}</p>  
                <button onClick={closeHandler}>Close</button>               
                {/* "this" is not used with closehandler on button as it is not a class component!                 */}
            </div>
                
        </div>
    );
};

export default GameOver;

