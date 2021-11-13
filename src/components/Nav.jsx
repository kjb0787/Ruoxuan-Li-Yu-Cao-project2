import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

export function Nav() {
    return (<div id="nav">
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/rules">Rules</Link>
    </div>);
}
