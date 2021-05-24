console.log('hello world');

// function to toggle the square to an x
var toggleTic = () => {
  const square = document.getElementById('square');
  console.log('inner', square.innerHTML);
  console.log('sq', square);
  if (!square.innerHTML) {
    square.innerHTML = 'x';
  } else {
    square.innerHTML = "";
  }
};

// event listener
const square = document.getElementById('square');
square.addEventListener("click", toggleTic, false);