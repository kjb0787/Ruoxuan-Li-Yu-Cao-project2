import React from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';


export default function Home() {
    const dispatch = useDispatch();
    return (
        <div className="homeContainer">
            <button onClick={() => {
                dispatch({
                    type: 'RESET',
                })
            }} className="homebutton" ><Link className="homeLink" to="/game">Standard Game</Link></button>
            <button onClick={() => {
                dispatch({
                    type: 'RESET',
                })
            }} className="homebutton" ><Link className="homeLink" to="/freegame">Free Play Game</Link></button>
            <button className="homebutton" ><Link className="homeLink" to="/rules">Rules</Link></button>
        </div>
    );
}