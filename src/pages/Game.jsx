import React from 'react';
import { Nav } from '../components/Nav';
import { Board } from "../components/Board";
import './Game.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function Game() {
    const dispatch = useDispatch();
    const boardState = useSelector((state) => state.game);
    // TODO: do I need two 10*10 arrays to store two different boards

    let winMessage = "";
    // TODO: WHY cannot i use integers in defaultState as win c, but array works
    let humanWinCount, aiWinCount;

    [aiWinCount, humanWinCount] = [boardState.aiWinCount, boardState.humanWinCount];

    if (aiWinCount === 17 || humanWinCount === 17) {
        winMessage = humanWinCount === 17 ? "You won! Congrats!!" : "You lost... AI rules the world now.";
        dispatch({
            type: 'stopGame',
        });
    }

    return (
        <div>
            <Nav />
            <div className="gameContainer">
                <div className="buttons">
                    <button onClick={() => {
                        dispatch({
                            type: 'startGame',
                        })
                    }} className="button">
                        Start Game
                    </button>

                    <button onClick={() => {
                        dispatch({
                            type: 'RESET',
                        })
                    }} className="button">
                        Reset
                    </button>
                </div>

                <div className="boards">
                    <div>
                        <h3>Your Board</h3>
                        <Board player="AI" />
                    </div>

                    <div>
                        <h3>AI’s Board (Your attacks here!)</h3>
                        <Board player="human" />
                    </div>
                </div>

                <div className="center">
                    <h1>{winMessage}</h1>
                </div>
            </div>


        </div>);

}