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
      console.log('boardx', board);
    } else {
      square.innerText = 'o';
      board[parentId][square.id] = 'o'
      console.log('boardo', board);
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
  boardX = [[], [], []];
  boardO = [[], [], []];
}


var messageAlert = (event) => {
  const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [9, 5, 1],
    [3, 5, 7],
    [7, 5, 3]
  ];

  // for (let i = 0; i < winningCombos.length; i++) {
  //   let combo = winningCombos[i];
  //   for (let j = 0; j < boardX.length; j++) {
  //     let xCombo = boardX[j];

  //     if (combo.length === xCombo.length && combo.every((value, index) => xCombo[index] === value)) {
  //       alert('Player X won!');
  //       clearBoard();
  //     }
  //   }
  // }

  // winningCombos.forEach((combo) => {

  // }

  // winningCombos.forEach((combo) => {
  //   if (combo.length === boardX.length && combo.every((value, index) => boardX[index] === value)) {
  //     alert('Player X won!');
  //   } else if (combo.length === boardO.length && combo.every((value, index) => boardO[index] === value)) {
  //     alert('Player O won!');
  //   }
  // });


  // const rows = document.querySelectorAll('tr');
  // rows.forEach((row) => {
  //   const rowArr = Array.prototype.slice.call(row.children);
  //   const textX = (element) => element.innerText === 'x';

  //   if (rowArr.every(textX)) {
  //     alert('You won!');
  //     clearBoard();
  //   }
  // });
};



// event listener
const squares = document.querySelectorAll('td');
squares.forEach((square) => square.addEventListener("click", toggleSquare));

const table = document.getElementById('boardgame');
table.addEventListener("click", messageAlert);

const reset = document.querySelector('button');
reset.addEventListener("click", clearBoard);