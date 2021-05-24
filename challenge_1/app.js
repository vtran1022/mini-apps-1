console.log('hello world');

// function to toggle the square to an x
var toggleTic = (event) => {
  const square = event.target;
  if (!square.innerHTML) {
    square.innerHTML = 'x';
  } else {
    square.innerHTML = "";
  }
};

// event listener
const squares = document.querySelectorAll('td');
squares.forEach((square) => square.addEventListener("click", toggleTic));