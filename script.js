

let reset = document.querySelector('#reset');
reset.addEventListener('click', initBoard);

let scramble = document.querySelector('#scramble');
scramble.addEventListener('click', scrambleBoard);

let button = document.querySelector('.button');
button.addEventListener('click', moveSquare);


function getSquareNextCoordinate(row, column) {
    const square = document.getElementById(`square-${row}-${column}`);
    if (square.innerHTML === '') {
        return null;
    }

    let north = { row: row - 1, column: column };
    let east = { row: row, column: column + 1 };
    let south = { row: row + 1, column: column };
    let west = { row: row, column: column - 1 };

    let validCoordinates = getValidCoordinates(north, east, south, west);
    let emptySpot = getEmptySpot(validCoordinates);

    return emptySpot;
    // Now we have the coord if it's null then you can't move else you can and should
    // Will return emptySpot coordinate object that has emptySpot.row/emptySpot.column which we can use for swap
}

function getEmptySpot(validCoordinates) {
    for (let i = 0; i < validCoordinates.length; i++) {
        const square = document.getElementById(`square-${validCoordinates[i].row}-${validCoordinates[i].column}`);
        if (square.innerHTML === '') {
            return validCoordinates[i];
        }
    }
    return null;
}


function getValidCoordinates(north, east, south, west) {
    let coordinates = [];
    if (north.row >= 0) {
        coordinates.push(north);
    }
    if (east.column <= 3) {
        coordinates.push(east);
    }
    if (south.row <= 3) {
        coordinates.push(south);
    }
    if (west.column >= 0) {
        coordinates.push(west);
    }
    return coordinates;
}




function moveSquare(row, column) {
    let nextCoordinate = getSquareNextCoordinate(row, column);
    if (nextCoordinate !== null) {
        //swapping current square with next square's text
        let currentSquare = document.getElementById(`square-${row}-${column}`);
        let tempSquareText = currentSquare.innerHTML;
        let nextSquare = document.getElementById(`square-${nextCoordinate.row}-${nextCoordinate.column}`);
        currentSquare.innerHTML = nextSquare.innerHTML;
        nextSquare.innerHTML = tempSquareText;
        let status = puzzleSolved();
        changeBoardColor(status);
    }
}

function changeBoardColor(status) {
    const squares = document.getElementsByClassName('button');
    if (status === true) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = 'yellow';
        }
    } else {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = "rgb(106, 198, 184)";
        }
    }
}

function initBoard() {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, -1]
    ]
    fillBoard(board);
    const squares = document.getElementsByClassName('button');
    changeBoardColor(false);
}

function getRandomNumAndRemoveFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomNum = arr[randomIndex];
    arr.splice(randomIndex, 1); // remove number from array
    return randomNum;
}

function scrambleBoard() { // scramble numbers next to the empty box
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
    const board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]


    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            board[row][column] = getRandomNumAndRemoveFromArray(numbers);
        }
    }
    fillBoard(board);
    changeBoardColor(false);
}

function fillBoard(board) {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            const square = document.getElementById(`square-${row}-${column}`);
            square.innerHTML = board[row][column] == -1 ? '' : board[row][column]; // ternary operator
        }
    }
}

function puzzleSolved() {
    const board = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, '']
    ]

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            const square = document.getElementById(`square-${row}-${column}`);
            if (square.innerHTML != board[row][column]) { // not using double equal to sign because it will compare the type too, single one only checks to see if they are equal
                return false;
            }
        }
    }
    return true;
}
