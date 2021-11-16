import React from 'react';
import { Nav } from '../components/Nav';
import { Board } from "../components/Board"
import './Game.css'

export function Game() {
    return (
        <div >
            <Nav />
            <div className="boards">
                <div>
                    <h3>Your Board</h3>
                    <Board player="human"/>
                </div>
                <div>
                    <h3>AI’s Board</h3>
                    <Board player="AI"/>
                </div>
            </div>
        </div>);
}