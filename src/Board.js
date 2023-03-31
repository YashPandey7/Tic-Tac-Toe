// This file contains the tic-tac-toe board and the game logic
import React from 'react';
import './css/board.css';
import { useState, useEffect, useRef } from 'react';

const Board = ({ reset, setReset, winner, setWinner }) => {

    // Creating a turn state, which indicates the current turn
    const [turn, setTurn] = useState(0);

    // Creating a data state, which contains the 
    // current picture of the board
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

    // Creating a reference for the board
    const boardRef = useRef(null);

    // Function to draw on the board
    const draw = (event, index) => {
        // Draws only if the position is not taken 
        // and winner is not decided yet
        if(data[index - 1] === '' && winner === '') {
            
            // Draws X if it's player 1's turn else draws O
            const current = turn === 0 ? "X" : "O" ;

            // Updating the data state
            data[index - 1] = current;

            //Drawing on the board
            event.target.innerText = current;

            // Switching the turn
            setTurn(turn===0 ? 1 : 0);
        }
    }



    return (
        <div ref={boardRef} className='board'>
            <div className='input input-1' onClick={(e) => draw(e,1)}></div>
            <div className="input input-2" onClick={(e) => draw(e,2)}></div>
            <div className="input input-3" onClick={(e) => draw(e,3)}></div>
            <div className="input input-4" onClick={(e) => draw(e,4)}></div>
            <div className="input input-5" onClick={(e) => draw(e,5)}></div>
            <div className="input input-6" onClick={(e) => draw(e,6)}></div>
            <div className="input input-7" onClick={(e) => draw(e,7)}></div>
            <div className="input input-8" onClick={(e) => draw(e,8)}></div>
            <div className="input input-9" onClick={(e) => draw(e,9)}></div>
        </div>
    );
}

export default Board;