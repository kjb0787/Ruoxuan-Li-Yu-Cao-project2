import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import { useDispatch } from 'react-redux';

export function Nav() {
    const dispatch = useDispatch();

    return (<div id="nav">
        <Link className="link" to="/">Home</Link>
        <Link onClick={() => {
            dispatch({
                type: 'RESET',
            })
        }} className="link" to="/game">Game</Link>
        <Link onClick={() => {
            dispatch({
                type: 'RESET',
            })
        }} className="link" to="/freegame">Free Play Game</Link>
        <Link className="link" to="/rules">Rules</Link>
    </div>);
}
