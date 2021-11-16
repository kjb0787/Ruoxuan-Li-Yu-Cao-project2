import React from 'react';
import './Board.css';
import { Square } from './Square';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export function Board() {
    const boardState = useSelector((state) => state.game);
    const dispatch = useDispatch();

    const boardComponent = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            boardComponent.push((<Square symbol={boardState[i][j].symbol} x={i} y={j}/>))
        }
    }

    return (
        <div>
            <div id="board">
                {boardComponent}
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
        </div>);
}