const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const playerPickDisplay = document.getElementById('player-pick');
const computerPickDisplay = document.getElementById('computer-pick');

const roundWinnerDisplay = document.getElementById('round-winner');

const gameWinnerDisplay = document.createElement('p');
const restartBtn = document.createElement('button');
restartBtn.textContent = 'Play again?';

let userPick;
let computerPick;

function userPicksRock() {
  userPick = 'Rock';
  playerPickDisplay.textContent = userPick;
  playRPS();
}

function userPicksPaper() {
  userPick = 'Paper';
  playerPickDisplay.textContent = userPick;
  playRPS();
}

function userPicksScissors() {
  userPick = 'Scissors';
  playerPickDisplay.textContent = userPick;
  playRPS();
}

function getComputerPick() {
  const randomNum = Math.floor(Math.random() * 3) // randomly generates 0, 1, or 2
  
  switch (randomNum) {
    case 0:
      computerPick = 'Rock';
      break;
    case 1:
      computerPick = 'Paper';
      break;
    case 2:
      computerPick = 'Scissors';
  }

  computerPickDisplay.textContent = computerPick;
  return computerPick;
}

function playRPS() {
  let playerWinsRound = function () {
    playerScoreDisplay.textContent++;
    roundWinnerDisplay.textContent = 'Player wins this round!';
  }

  let computerWinsRound = function () {
    computerScoreDisplay.textContent++;
    roundWinnerDisplay.textContent = 'Computer wins this round!';
  }

  getComputerPick();

  // RPS logic
  if (computerPick == userPick) {
    roundWinnerDisplay.textContent = `This round is a draw!`;
  } else if (computerPick == 'Rock' && userPick == 'Paper') {
    playerWinsRound();
  } else if (computerPick == 'Paper' && userPick == 'Rock') {
    computerWinsRound();
  } else if (computerPick == 'Paper' && userPick == 'Scissors') {
    playerWinsRound();
  } else if (computerPick == 'Scissors' && userPick == 'Paper') {
    computerWinsRound();
  } else if (computerPick == 'Scissors' && userPick == 'Rock') {
    playerWinsRound();
  } else { // computer rock vs player scissors
    computerWinsRound();
  }

  if (computerScoreDisplay.textContent == 5) {
    gameWinnerDisplay.textContent = 'Computer wins the game!';
    document.body.appendChild(gameWinnerDisplay);
    disableRPSButtons();
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener('click', restartRPS);

  } else if (playerScoreDisplay.textContent == 5) {
    gameWinnerDisplay.textContent = 'Player wins the game!';
    document.body.appendChild(gameWinnerDisplay);
    disableRPSButtons();
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener('click', restartRPS);
  }
}

function disableRPSButtons() {
  rockBtn.setAttribute('disabled', 'true');
  paperBtn.setAttribute('disabled', 'true');
  scissorsBtn.setAttribute('disabled', 'true');
}

function restartRPS() {
  playerPickDisplay.textContent = '';
  computerPickDisplay.textContent = '';
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  rockBtn.removeAttribute('disabled', 'true');
  paperBtn.removeAttribute('disabled', 'true');
  scissorsBtn.removeAttribute('disabled', 'true');
  gameWinnerDisplay.textContent = '';
  roundWinnerDisplay.textContent = '';
  restartBtn.style.display = 'none';
}

rockBtn.addEventListener('click', userPicksRock);
paperBtn.addEventListener('click', userPicksPaper);
scissorsBtn.addEventListener('click', userPicksScissors);