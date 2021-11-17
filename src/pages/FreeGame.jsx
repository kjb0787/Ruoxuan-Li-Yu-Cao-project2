import React from 'react';
import { Nav } from '../components/Nav';
import { Board } from "../components/Board";
import './Game.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function FreeGame() {
    const dispatch = useDispatch();
    const boardState = useSelector((state) => state.game);
    let winMessage = "";
    let humanWinCount;

    humanWinCount = boardState.humanWinCount;

    if (humanWinCount === 17) {
        winMessage = "You won! Congrats!!";
        dispatch({
            type: 'stopGame',
        });
    }

    return (
        <div>
            <Nav />
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

            <div className="freeGameBoard">
                <div className="hidden">
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

        </div>);

}