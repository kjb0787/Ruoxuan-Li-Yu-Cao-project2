import React from 'react';
import { Nav } from '../components/Nav';
import { Board } from "../components/Board";
import './Game.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function Game() {
    const dispatch = useDispatch();
    const boardState = useSelector((state) => state.game);

    let winMessage = "lol";
    // TODO: WHY cannot i use integers in defaultState as win c
    let humanWinCount, aiWinCount;
    [humanWinCount, aiWinCount] = boardState.countArray;
    if (aiWinCount === 17) {
        winMessage = "You lost... AI rules the world now.";
        dispatch({
            type: 'stopGame',
        });
    }
    if (humanWinCount === 17) {
        winMessage = "You won! Congrats!!";
        dispatch({
            type: 'stopGame',
        });
    }

    return (
        <div >
            <Nav />
            <div className="boards">

                <div>
                    <h3>Your Board</h3>
                    <Board player="AI"/>
                </div>
                <div>
                    <h3>AI’s Board (Your attacks here!)</h3>
                    <Board player="human"/>
                </div>
            </div>
        

            <button onClick = {() => {
                dispatch({
                    type: 'startGame',
                })
            }}>
                Start Game
            </button>

            <button onClick = {() => {
                dispatch({
                    type: 'RESET',
                })
            }}>
                Reset
            </button>

            <div>
                <h1>{winMessage}</h1>
            </div>

        </div>);

}