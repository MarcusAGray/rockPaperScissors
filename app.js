const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const display = document.getElementById('opponentMoveDisplay');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerScoreDisplay = document.getElementById('playerScore');
const machineScoreDisplay = document.getElementById('computerScore');

const optionsArr = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let machineScore = 0;



startBtn.addEventListener('click', function() {
  display.textContent = "Get Ready";

  let countDown = 3;
  let intervalId = setInterval(function() {
    if(countDown == 0) {
      clearInterval(intervalId);
      display.textContent = "";
      draw();
    } else {
      display.textContent = countDown;
      countDown -= 1;
    }
  }, 1000);
})

restartBtn.addEventListener('click', function() {
  display.textContent = "";
  playerScore = 0;
  machineScore = 0;
  playerScoreDisplay.textContent = playerScore;
  machineScoreDisplay.textContent = machineScore;
})

function calcMachineMove() {
  let rand = Math.floor(Math.random() * optionsArr.length);
  return optionsArr[rand];
}

function draw() {
  let playerMove = optionsArr[playerChoice];
  let machineMove = calcMachineMove();
  
  display.textContent = `Machine Move: ${machineMove} 
                         Player Move: ${playerMove}`;

  if ((playerMove == "ROCK" && machineMove == "SCISSORS") ||
      (playerMove == "PAPER" && machineMove == "ROCK") ||
      (playerMove == "SCISSORS" && machineMove == "PAPER")) {
    display.textContent += "Player Wins";
    playerScore += 1;
    playerScoreDisplay.textContent = playerScore;
  } else if (playerMove == machineMove) {
    display.textContent += "Tie";
  } else {
    display.textContent += "Machine Wins";
    machineScore += 1;
    machineScoreDisplay.textContent = machineScore;
  }
  // prompt player to continue
}

rock.addEventListener('click', function() {
  playerChoice = 0;
})

paper.addEventListener('click', function() {
  playerChoice = 1;
})

scissors.addEventListener('click', function() {
  playerChoice = 2;
})