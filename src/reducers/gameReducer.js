let tileObj = {
    "isShip": false,
    "selected": false,
    "symbol": " "
};

const defaultState = {
    count: 0,
    gameBoard: []
}

function generateGameBoard() {
    for (let i = 0; i < 10; ++i) {
        let row = [];
        for (let j = 0; j < 10; ++j) {
            row.push({
                "isShip": false,
                "selected": false,
                "symbol": " "
            })
        }
        defaultState.gameBoard.push(row);
    }
    return defaultState.gameBoard;
}

export default function gameReducer(state, action) {
    if (state === undefined) {
        return generateGameBoard()
    }

    if (action.type === 'boardClick') {
        const tile = state[action.x][action.y];
        if (tile.selected) {
            return [...state];
        }
        if (tile.isShip) {
            state[action.x][action.y].symbol = "X";
            state[action.x][action.y].selected = true;
        } else {
            state[action.x][action.y].symbol = "0";
            state[action.x][action.y].selected = true;
        }
        return [...state];
    }

    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++){
                state[i][j] = {
                    "isShip": false,
                    "selected": false,
                    "symbol": " "
                };
            }
        }
        return [...state];
    }
    return state;
}
