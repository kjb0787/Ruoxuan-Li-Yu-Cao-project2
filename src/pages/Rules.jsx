import React from 'react';
import './Rules.css';
import { Nav } from '../components/Nav';


export default function Rules() {
    return (
        <div>
            <Nav />
            <div className="container">
                <h1>Battleship Game Rules</h1>
                <p>Each player places the 5 ships somewhere on their board. Ships may not overlap each other.  No ships may be placed on another ship. Once the guessing begins, the players may not move the ships.</p>
                <p>Player and AI take turns guessing by clicking the square. The opponent responds with "hit" or "miss" as appropriate. </p>
            </div>
        </div>

    );
}