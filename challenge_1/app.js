console.log('hello world');

// function to toggle the square to an x
var toggleTic = () => {
  const square = document.getElementById('square');
  console.log('func');
  if (square.value === '') {
    square.value = 'x';
  }
};

// event listener
const square = document.getElementById('square');
square.addEventListener("click", toggleTic, false);
