const BOARD_LEN = 10;

const defaultState = {
    gameStarted: false,
    gameBoard: []
}

function generateGameBoard() {
    defaultState.gameBoard = [];
    for (let i = 0; i < BOARD_LEN; ++i) {
        let row = [];
        for (let j = 0; j < BOARD_LEN; ++j) {
            row.push({
                "isShip": false,
                "symbol": " "
            })
        }
        defaultState.gameBoard.push(row);
    }
    return defaultState.gameBoard;
}

export default function gameReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard();
    }

    if (action.type === 'boardClick') {
        const tile = state[action.x][action.y];
        if (!defaultState.gameStarted) {
            return [...state];
        }
        if (tile.isShip) {
            state[action.x][action.y].symbol = "X";
        } else if (!tile.isShip) {
            state[action.x][action.y].symbol = "0";
        }
        return [...state];
    }

    if (action.type === 'startGame') {
        defaultState.gameStarted = true;
        setShips(state);
    }
    
    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++) {
                state[i][j] = {
                    "isShip": false,
                    "symbol": " "
                };
            }
        }
        return [...state];
    }
    return state;
}

function setShips(state) {
    const nums = new Set();
    function placeShip(shipLen) {
        let rand = getRandomInt(0, BOARD_LEN);
        while (nums.has(rand)) {
            rand = getRandomInt(0, BOARD_LEN);  
        }
        nums.add(rand);
        const start = getRandomInt(0, BOARD_LEN - shipLen);
        const row = rand;
        for (let i = start; i < start + shipLen; ++i) {
            state[row][i].isShip = true;
        }
    }
    placeShip(5);
    placeShip(4);
    placeShip(3);
    placeShip(3);
    placeShip(2);
    console.log(state);
    return [...state];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}
