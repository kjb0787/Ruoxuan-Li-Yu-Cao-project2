import React from 'react';
import './Board.css';
import { Square } from './Square';
import { useSelector } from 'react-redux';


export function Board() {
    const boardState = useSelector((state) => state.game);
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
        </div>);
}