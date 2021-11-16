function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}

const SHIP_NUM = 5;
const BOARD_LEN = 10;

const defaultState = {
    count: 0,
    gameBoard: []
}

function setShips(state) {
    const nums = new Set();
    while (nums.size !== SHIP_NUM) {
        nums.add(getRandomInt(0, state.length));
    }

    function placeShip(row, start, shipLen, state) {
        for (let i = start; i < start + shipLen; ++i) {
            state[row][i].isShip = true;
        }
    }

    for (const num in nums) {
        const start = getRandomInt(0, state.length - 4);
        const shipLen = 4;
        for (let i = start; i < start + shipLen; ++i) {
            state[num][i].isShip = true;
        }
    }
    return {...state};
}

function generateGameBoard() {
    for (let i = 0; i < BOARD_LEN; ++i) {
        let row = [];
        for (let j = 0; j < BOARD_LEN; ++j) {
            row.push({
                "isShip": false,
                "selected": false,
                "symbol": " "
            })
        }
        defaultState.gameBoard.push(row);
    }

    const nums = new Set();
    while (nums.size !== SHIP_NUM) {
        nums.add(getRandomInt(0, BOARD_LEN));
    }

    for (const num in nums) {
        const start = getRandomInt(0, defaultState.gameBoard.length - 4);
        const shipLen = 4;
        for (let i = start; i < start + shipLen; ++i) {
            defaultState.gameBoard[num][i].isShip = true;
        }
    }
    console.log(defaultState.gameBoard);
    return defaultState.gameBoard;
}

export default function gameReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard();
    }

    if (action.type === 'boardClick') {
        const tile = state[action.x][action.y];
        if (tile.selected) {
            return {...state};
        }
        if (tile.isShip) {
            state[action.x][action.y].symbol = "X";
        } else if (!tile.isShip) {
            state[action.x][action.y].symbol = "0";
        }
        state[action.x][action.y].selected = true;
        return {...state};
    }

    if (action.type === 'startGame') {
        const nums = new Set();
        while (nums.size !== SHIP_NUM) {
            nums.add(getRandomInt(0, state.length));
        }
        for (const num in nums) {
            const start = getRandomInt(0, state.length - 4);
            const shipLen = 4;
            for (let i = start; i < start + shipLen; ++i) {
                state[num][i].isShip = true;
            }
            // placeShip(num, getRandomInt(0, state.length - 4), 4, state);
            // placeShip(num, getRandomInt(0, state.length - 3), 3, state);
            // placeShip(num, getRandomInt(0, state.length - 3), 3, state);
            // placeShip(num, getRandomInt(0, state.length - 2), 2, state);
        }
        return {...state};
    }
    
    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++) {
                state[i][j] = {
                    "isShip": false,
                    "selected": false,
                    "symbol": " "
                };
            }
        }
        return {...state};
    }
    return state;
}
