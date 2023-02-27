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
    default:
      computerPick = 'scissors';
  }

  return computerPick;
}

// the player inputs their choice
function getUserPick() {
  userPick = prompt('What is your pick?').toLowerCase();
  return userPick;
}

// function getGameResult() {
//   getComputerPick();
//   getUserPick();
// }

// getGameResult();
