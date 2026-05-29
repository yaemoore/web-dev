



// replace stratNum1 and stratNum2 with query parameters

let queryParams = new URLSearchParams(window.location.search);
const P1_NUM_STRATS = queryParams.get("stratNum1");
const P2_NUM_STRATS = queryParams.get("stratNum2");
const PAYOFF_CONTENTS = "(<input type='number'>,<input type='number'>)";


buildMatrix();

function buildMatrix() {
  let matrixDiv = document.getElementById("matrix");
  
  
  //loop through (P1_NUM_STRATS + 1) times. Each iteration, make a row div
  
  for (let i = 0; i < (P1_NUM_STRATS + 1); i++) {  
    //create new row
    let newRow = document.createElement("div");
    newRow.classList.add("matrix-row");
    matrix.append(newRow);  
    //loop through (P2_NUM_STRATS + 1) times. Each iteration make a new cell
    for (let j = 0; j < (P2_NUM_STRATS + 1); j++) {
    //create a new cell
      let newCell = document.createElement("div");
      if (i == 0 && j == 0) {
        newCell.classList.add("empty-cell");
      } else if (i == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "T<sub>" + j + "</sub>";
      } else if (j == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "S<sub>" + i + "</sub>";
      } else {
        newCell.classList.add("payoff-cell");
        newCell.innerHTML = PAYOFF_CONTENTS;
      }
      newRow.append(newCell);
    }
  }
}

function randomize() {
  let payoffArr = document.querySelectorAll(".payoff-cell input");
  const MIN = -10;
  const MAX = 10;
 for (const elem of payoffArr) {
   elem.value = Math.floor(Math.random() * (MAX + 1 - MIN) + MIN);
 } 
}

function compute() {
 let p1PayArr = document.querySelectorAll(".payoff-cell input:first-child");
 let p2PayArr = document.querySelectorAll(".payoff-cell input:last-child");  
 let payCellArr = document.querySelectorAll(".payoff-cell");
 
 for (const elem of payCellArr) {
   if (elem.classlist.contains("eliminated") == true) elem.classList.remove("eliminated");
   if (elem.classlist.contains("ne") == true) elem.classList.remove("ne");
 }

//loop through every column, finding P1s highest payoff out of the rows
  
  for (let j = 0; j < P2_NUM_STRATS; j++) {
    let largest = -Infinity;
    
    //identify highest payoff int he column
    for (let i = 0; i < P1_NUM_STRATS; i++) {
     if (Number(p1PayArr[P2_NUM_STRATS*i+j].value) > Number(largest)) largest = p1PayArr[P2_NUM_STRATS*i+j].value;
    }
    //eliminate cells that arent the best 
    for (let i = 0; i < P1_NUM_STRATS; i++) {
     if (Number(p1PayArr[P2_NUM_STRATS*i+j].value) != Number(largest)) payCellArr[P2_NUM_STRATS*i+j].classList.add("eliminated");
    }
  }
  
//loop through every row finding P2s highest payoff out of the columns

for (let i = 0; i < P1_NUM_STRATS; i++) {
    let largest = -Infinity;
    
    //identify highest payoff in the column
    for (let j = 0; j < P2_NUM_STRATS; j++) {
     if (Number(p2PayArr[P2_NUM_STRATS*i+j].value) > Number(largest)) largest = p2PayArr[P2_NUM_STRATS*i+j].value;
    }
    //eliminate cells that arent the best 
    for (let j = 0; j < P2_NUM_STRATS; j++) {
     if (Number(p2PayArr[P2_NUM_STRATS*i+j].value) != Number(largest)) payCellArr[P2_NUM_STRATS*i+j].classList.add("eliminated");
    }
  }
  
//give ne class to any cells that are best reponses to for both players
  
  for(let elem of payCellArr) {
    if(elem.classlist.contains("eliminated") == false) elem.classList.add("ne")
  }
  
}
