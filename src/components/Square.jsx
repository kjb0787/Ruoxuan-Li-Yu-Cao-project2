import React from 'react';
import './Square.css';
import { useDispatch } from 'react-redux';

export function Square(props) {
    const dispatch = useDispatch();
    const symbol = props.symbol;
    return (
        <div onClick={() => {
            dispatch({
                type: 'boardClick',
                x: props.x,
                y: props.y,
            })
        }
        } id="square">
            {symbol}
        </div>);
}
