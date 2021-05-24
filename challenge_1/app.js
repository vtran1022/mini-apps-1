var player = 'x';
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
  if (!square.innerText) {
    if (player === 'x') {
      square.innerText = 'x';
    } else {
      square.innerText = 'o';
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
}



var messageAlert = (event) => {
  const board = ['', '', '',
                '', '', '',
                '', '', ''];

  const rows = document.querySelectorAll('tr');
  rows.forEach((row) => {
    const rowArr = Array.prototype.slice.call(row.children);
    const textX = (element) => element.innerText === 'x';

    if (rowArr.every(textX)) {
      alert('You won!');
      clearBoard();
    }
  });
};



// event listener
const squares = document.querySelectorAll('td');
squares.forEach((square) => square.addEventListener("click", toggleSquare));

const table = document.getElementById('boardgame');
table.addEventListener("click", messageAlert);

const reset = document.querySelector('button');
reset.addEventListener("click", clearBoard);