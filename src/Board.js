// This file contains the tic-tac-toe board and the game logic
import React from 'react';
import './css/board.css';
import { uesState, useEffect, useRef } from 'react';

const Board = ({ reset, setReset, winner, setWinner }) => {

    

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