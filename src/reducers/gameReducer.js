const BOARD_LEN = 10;

const defaultState = {
    gameStarted: false,
    countArray: [0, 0],
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
    defaultState.countArray = [0, 0];
    populateGameBoard(defaultState.aiGameBoard);
    populateGameBoard(defaultState.humanGameBoard);
    return {...defaultState};
}


export default function gameReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard();
    }

    if (action.type === 'boardClick') {
        if (!defaultState.gameStarted) {
            return {...state};
        }
        humanShipHitTry(state, action);
        return {...state};
    }

    if (action.type === 'stopGame') {
        defaultState.gameStarted = false;
    }

    if (action.type === 'startGame') {
        if (defaultState.gameStarted) {
            defaultState.countArray = [0, 0];
            resetBoard(state.aiGameBoard);
            resetBoard(state.humanGameBoard);
        }
        defaultState.gameStarted = true;
        // console.log(state);
        // console.log(state.aiGameBoard);
        // debugger;
        setShips(state.aiGameBoard);
        setShips(state.humanGameBoard);
        return {...state};
    }
    
    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        defaultState.countArray = [0, 0];
        resetBoard(state.aiGameBoard);
        resetBoard(state.humanGameBoard);
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
        // console.log(state);
        // debugger;
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

function resetBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] = {
                "isShip": false,
                "symbol": " "
            };
        }
    }
}

function humanShipHitTry(state, action) {
    const board = state.aiGameBoard;
    const tile = board[action.x][action.y];
    if (tile.symbol === " ") {
        aiShipHitTry(state.humanGameBoard);
        if (tile.isShip) {
            defaultState.countArray[0]++;
            board[action.x][action.y].symbol = "X";
            console.log("human hit try");
            console.log(defaultState.countArray[0]);
        } else if (!tile.isShip) {
            board[action.x][action.y].symbol = "0";
        }
    }
}

function aiShipHitTry(board) {
    const set = new Set();
    let x = getRandomInt(0, BOARD_LEN);
    let y = getRandomInt(0, BOARD_LEN);
    while (set.has([x, y])) {
        x = getRandomInt(0, BOARD_LEN);
        y = getRandomInt(0, BOARD_LEN);
    }
    set.add([x, y]);
    const tile = board[x][y];
    if (tile.isShip) {
        board[x][y].symbol = "X";
        defaultState.countArray[1]++;
    } else if (!tile.isShip) {
        board[x][y].symbol = "0";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}
