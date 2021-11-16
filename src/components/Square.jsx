import React from 'react';
import './Square.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function Square(props) {
    const dispatch = useDispatch();
    const boardState = useSelector((state) => state.game);
    return (
        <div onClick={() => {
            dispatch({
                type: 'boardClick',
                x: props.x,
                y: props.y,
            })
        }
        } id="square">
            {boardState[props.x][props.y].symbol}
        </div>);
}
