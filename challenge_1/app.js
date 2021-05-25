var player = 'x';
var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

var switchPlayers = (currentPlayer) => {
  const caption = document.querySelector('caption');
  if (currentPlayer === 'x') {
    player = 'o';
    caption.innerText = 'Player O';
  } else {
    player = 'x';
    caption.innerText = 'Player X';
  }
}

// function to toggle the square to an x
var toggleSquare = (event) => {
  const square = event.target;
  const parentId = square.parentNode.id.slice(-1);

  if (!square.innerText) {
    if (player === 'x') {
      square.innerText = 'x';
      board[parentId][square.id] = 'x';
    } else {
      square.innerText = 'o';
      board[parentId][square.id] = 'o'
    }

    switchPlayers(player);
  }
};

// func to clear the board
var clearBoard = () => {
  const squares = document.querySelectorAll('td');
  squares.forEach((square) => square.innerText = "");

  const caption = document.querySelector('caption');
  caption.innerText = 'Player X';

  player = 'x';
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
}


var messageAlert = (event) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [8, 4, 0],
    [2, 4, 6],
    [6, 4, 2]
  ];

  for (let i = 0; i < board.length; i++) {
    let row = board[i];

    for (let j =0; j < winningCombos.length; j++) {
      let combo = winningCombos[j];

      if ((combo.every((index) => row[index] === 'x')) || combo.every((index) => row[index] === 'o')) {
        alert(`Player ${row[i]} won!`);
      }
    }
  }
};



// event listener
const squares = document.querySelectorAll('td');
squares.forEach((square) => square.addEventListener("click", toggleSquare));

const table = document.getElementById('boardgame');
table.addEventListener("click", messageAlert);

const reset = document.querySelector('button');
reset.addEventListener("click", clearBoard);