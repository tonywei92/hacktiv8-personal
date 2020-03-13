function start() {
    const board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    let turn = Math.round(Math.random());
    while (!finished(board)) {
        let coordinate = createCoordinate(board);
        if (turn % 2 === 0) {
            board[coordinate[0]][coordinate[1]] = 'x';
        }
        else {
            board[coordinate[0]][coordinate[1]] = 'o';
        }
        turn++;
    }
    printBoard(board);
    console.log(finished(board))
}

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        console.log('| ' + board[i].join(' | ') + ' |')
    }
}

function finished(board) {
    let result = '';
    for (let i = 0; i < 3; i++) {
        if (board[i][0] + board[i][1] + board[i][2] === 'xxx') {
            result = 'x wins!'
            break;
        }

        if (board[i][0] + board[i][1] + board[i][2] === 'ooo') {
            result = 'o wins!'
            break;
        }

        if (board[0][i] + board[1][i] + board[2][i] === 'xxx') {
            result = 'x wins!'
            break;
        }

        if (board[0][i] + board[1][i] + board[2][i] === 'ooo') {
            result = 'o wins!'
            break;
        }
    }
    if (board[0][0] + board[1][1] + board[2][2] === 'xxx') {
        result = 'x wins!'
    }
    if (board[0][0] + board[1][1] + board[2][2] === 'ooo') {
        result = 'o wins!'
    }
    if (board[2][0] + board[1][1] + board[0][2] === 'xxx') {
        result = 'x wins!'
    }
    if (board[2][0] + board[1][1] + board[0][2] === 'ooo') {
        result = 'o wins!'
    }

    if (result.length !== 0) {
        return result
    }
    else {
        let draw = true;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ' ') {
                    draw = false;
                }
            }
        }
        if (draw) {
            return 'draw!'
        }
        else {
            return false;
        }
    }
}

function randomCoordinate() {
    const x = Math.floor(Math.random() * 3);
    const y = Math.floor(Math.random() * 3);
    return [x, y];
}

function isFree(board, coordinate) {
    return board[coordinate[0]][coordinate[1]] === ' ';
}

function createCoordinate(board) {
    let coordinate = randomCoordinate();
    while (!isFree(board, coordinate)) {
        coordinate = randomCoordinate();
    }
    return coordinate;
}

start()