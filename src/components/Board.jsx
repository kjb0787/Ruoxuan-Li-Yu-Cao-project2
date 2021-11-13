import React from 'react';
import './Board.css';
import { Square } from './Square';


export function Board() {

    const boardComponent = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            boardComponent.push((<Square />))
        }
    }

    return (
        <div>
            <div id="board">
                {boardComponent}
            </div>
        </div>);
}