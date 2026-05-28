let gameOverDiv = document.getElementById("game-over");
let winnerText = document.querySelector("#game-over");
let squareArr = document.querySelectorAll(".ttt-square");
let playerTurn = document.getElementById("player-turn")
let resetButton = document.getElementById("reset-button")
let currentPlayer = "X";


for (const element of squareArr) {
  element.addEventListener("click", (event) => drawSymbol(event));
}

function drawSymbol(event) {
  let clickedSquare = event.target;
  
  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;
    if (checkForWinner() == false) checkForDraw();
    changePlayer();
  }
}

function checkForWinner() {
  let isGameOver = false;
  
  for(let i = 0; i < 3; i++) {
    if (squareArr[i].innerText == currentPlayer
       && squareArr[i + 3].innerText == currentPlayer
       && squareArr[i + 6].innerText == currentPlayer) isGameOver = true;
  }
  for (let i = 0; i < 3; i++) {
    if (squareArr[3 * i].innerText == currentPlayer
        && squareArr[3 * i + 1].innerText == currentPlayer
        && squareArr[3 * i + 2].innerText == currentPLayer) isGameOver = true;
  }
    if (squareArr[0].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[8].innerText == currentPlayer) isGameOver = true;
  else if (squareArr[2].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[6].innerText == currentPlayer) isGameOver = true;
  
  
  if (isGameOver == true) showWin();
  
}

function changePlayer() {
  if (currentPlayer == "X") currentPlayer = "O", playerTurn.innerText = "Turn: O";
  else currentPlayer = "X", playerTurn.innerText = "Turn: X";
  
}


function checkForDraw() {
  
  let isDraw = true;
  
  for (const elem of squareArr) {
    if ( elem.innerText == "" ) isDraw = false;
  }
 
  if (isDraw == true) showDraw();
  
}

function showDraw() {
  gameOverDiv.style.display = "block"
  winnerText.innerHTML = "<div><p>Draw!</p><button onclick='newGame()'>New Game</button></div>"
 }

function showWin() {
  gameOverDiv.style.display = "block";
  winnerText.innerHTML =   "<div><p>" + currentPlayer +" wins!</p><button onclick='newGame()'>New Game</button></div>";
}

function resetGame() {
  for (const elem of squareArr) {
    elem.innerText =""
  }
}

function newGame() {
  gameOverDiv.style.display = "none";
  for (const elem of squareArr) {
    elem.innerText =""
  }
  currentPlayer = "X";
  changePlayer();
}
