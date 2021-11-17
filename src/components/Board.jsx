import React from 'react';
import './Board.css';
import { Square } from './Square';
import { useSelector } from 'react-redux';

export function Board(props) {
    const boardState = useSelector((state) => state.game);

    const boardComponent = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let hitSymbol = "";
            let isShip = false;
            if (props.player === "human") {
                hitSymbol = boardState.aiGameBoard[i][j].symbol;
            } else if (props.player === "AI") {
                hitSymbol = boardState.humanGameBoard[i][j].symbol;
                isShip = boardState.humanGameBoard[i][j].isShip;
            }
            boardComponent.push((<Square symbol={hitSymbol} x={i} y={j} player={props.player} isShip={isShip} />))
        }
    }

    return (
        <div>
            <div id="board">
                {boardComponent}
            </div>
        </div>);
}