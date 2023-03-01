let computerPick;
let userPick;

function getComputerPick() {
  const randomNum = Math.floor(Math.random() * 3) // randomly generates 0, 1, or 2
  
  // depending on randomNum, the computer will be assigned a choice
  switch (randomNum) {
    case 0:
      computerPick = 'rock';
      break;
    case 1:
      computerPick = 'paper';
      break;
    case 2:
      computerPick = 'scissors';
  }

  return computerPick;
}

// the player inputs their choice
function getUserPick() {
  userPick = prompt('What is your pick?').toLowerCase();
  return userPick;
}

function playRPS() {

  let playerScore = 0;
  let computerScore = 0;

  function displayPicks() {
    console.log(`Computer picked: ${computerPick} \n Player picked: ${userPick}`);
  }

  // RPS will have 5 rounds
  for (let i = 1; i <= 5; i++) {
    let playerWinsRound = function () {
      playerScore++;
      displayPicks();
      alert(`You win round ${i}!`);
      console.log(`Round ${i}: Player`);
    }

    let computerWinsRound = function () {
      computerScore++;
      displayPicks();
      alert(`Computer wins round ${i}!`);
      console.log(`Round ${i}: Computer`);
    }

    getUserPick();
    getComputerPick();

    // RPS logic
    if (computerPick == userPick) {
      displayPicks();
      alert(`Round ${i} is a draw!`);
      console.log(`Round ${i}: Draw`);
    } else if (computerPick == 'rock' && userPick == 'paper') {
      playerWinsRound();
    } else if (computerPick == 'paper' && userPick == 'rock') {
      computerWinsRound();
    } else if (computerPick == 'paper' && userPick == 'scissors') {
      playerWinsRound();
    } else if (computerPick == 'scissors' && userPick == 'paper') {
      computerWinsRound();
    } else if (computerPick == 'scissors' && userPick == 'rock') {
      playerWinsRound();
    } else { // computer rock vs player scissors
      computerWinsRound();
    }
  }

  // winner is displayed
  if (playerScore > computerScore) {
    console.log(`You won ${playerScore} of 5 rounds. You are the winner!`);
  } else if (playerScore < computerScore) {
    console.log(`Computer won ${computerScore} of 5 rounds. Computer is the winner!`);
  } else {
    console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`)
    console.log(`The score is tied. It's a draw!`);
  }
}

playRPS();
