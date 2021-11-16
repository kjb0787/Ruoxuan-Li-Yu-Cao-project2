const BOARD_LEN = 10;

const defaultState = {
    gameStarted: false,
    aiGameBoard: [],
    humanGameBoard: []
}

function populateGameBoard(board) {
    for (let i = 0; i < BOARD_LEN; ++i) {
        let row = [];
        for (let j = 0; j < BOARD_LEN; ++j) {
            row.push({
                "isShip": false,
                "symbol": " "
            })
        }
        board.push(row);
    }
}


function generateGameBoard() {
    defaultState.aiGameBoard = [];
    defaultState.humanGameBoard = [];
    populateGameBoard(defaultState.aiGameBoard);
    populateGameBoard(defaultState.humanGameBoard);
    return defaultState;
}

function shipHitTry(board, action) {
    const tile = board[action.x][action.y];
    if (tile.isShip) {
        board[action.x][action.y].symbol = "X";
    } else if (!tile.isShip) {
        board[action.x][action.y].symbol = "0";
    }
}

export default function gameReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard();
    }

    if (action.type === 'boardClick') {
        if (!defaultState.gameStarted) {
            return {...state};
        }
        shipHitTry(state.humanGameBoard);
        shipHitTry(state.aiGameBoard);
        return {...state};
    }

    if (action.type === 'startGameAI') {
        defaultState.gameStarted = true;
        console.log(state);
        console.log(state.aiGameBoard);
        debugger;
        setShips(state.aiGameBoard);
        return {...state};
    }

    if (action.type === 'startGameHuman') {
        defaultState.gameStarted = true;
        setShips(state.humanGameBoard);
        return {...state};
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
        return {...state};
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
        console.log(state);
        debugger;
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
