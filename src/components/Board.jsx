import React from 'react';
import './Board.css';
import { Square } from './Square';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export function Board(props) {
    const boardState = useSelector((state) => state.game);
    const dispatch = useDispatch();

    const boardComponent = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let hitSymbol = "";
            if (props.player === "AI") {
                hitSymbol = boardState.aiGameBoard;
            } else if (props.player === "human") {
                hitSymbol = boardState.humanGameBoard;
            }
            boardComponent.push((<Square symbol={hitSymbol} x={i} y={j} player={props.player}/>))
        }
    }

    return (
        <div>
            <div id="board">
                {boardComponent}
            </div>
            <button onClick = {() => {
                if (props.player === "AI") {
                    dispatch({
                        type: 'startGameAI',
                    })
                } else if (props.player === "human") {
                    dispatch({
                        type: 'startGameHuman',
                    })
                }
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