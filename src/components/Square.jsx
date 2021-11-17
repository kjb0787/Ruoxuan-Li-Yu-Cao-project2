import React from 'react';
import './Square.css';
import { useDispatch } from 'react-redux';

export function Square(props) {
    const dispatch = useDispatch();
    let styleString = "skyblue";
    if (props.isShip) {
        styleString = "grey";
    }
    
    return (
        <div onClick={() => {
            if (props.player === "human") {
                dispatch({
                    type: 'boardClick',
                    x: props.x,
                    y: props.y,
                });
            }
        }
        } id="square" style={{backgroundColor: styleString}}>
            {props.symbol}
        </div>);
}
