console.log('hello world');

// function to toggle the square to an x
var toggleTic = (event) => {
  const square = event.target;
  if (!square.innerText) {
    square.innerText = 'x';
  } else {
    square.innerText = "";
  }
};

// event listener
const squares = document.querySelectorAll('td');
squares.forEach((square) => square.addEventListener("click", toggleTic));

var winAlert = () => {
  const rows = document.querySelectorAll('tr');
  rows.forEach((row) => {
    const rowArr = Array.prototype.slice.call(row.children);
    const textX = (element) => element.innerText === 'x';

    if (rowArr.every(textX)) {
      alert('You won!');
    }
  });
};