var gameBoard = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
]

var currentMove = [];
var move = [];

var blankBoard = function() {
  console.log("    |  |  |  |");
  console.log("    |  |  |  |");
  console.log("    |  |  |  |");
  console.log("    |  |  |  |");
}

var getMove = function() {
  currentMove = prompt("please enter your Move in coordinates. I.E. 0,0 to be placed in the first part.");
}

var gameOver = function() {
  // declare if winner or if board is full return true, else return false;
}

var game = function (){
  blankBoard();
  // while(!gameOver){

  while(1 > 0){
    getMove();
    
  }
  console.log('GOOD JOB SOMETHING IS WORKING');
}

game();