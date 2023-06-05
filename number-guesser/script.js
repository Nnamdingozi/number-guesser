let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()* 10)
};
/*const compareGuesses = (human, computer, target) =>{
 let humanGuess = human - target;
 let computerGuess = computer - target;
 if(humanGuess == computerGuess) {
   return true;
 }else  if(humanGuess < computerGuess) {
return true;
 } else {
    return false;
 }
};*/
function getAbsoluteDistance(num1, num2) {
      return num1 - num2;;
}
const compareGuesses = (human, computer, target) =>{
    if (human < 0 || human > 9) {
        alert('Number out of range. Choose a number between 0 and 9')
    }
    let humanGuess = getAbsoluteDistance(human, target);
    let computerGuess = getAbsoluteDistance(computer, target);
    if(humanGuess == computerGuess) {
        return true;
      }else  if(humanGuess < computerGuess) {
     return true;
      } else {
         return false;
      }
}


function updateScore(winner) {
      if(winner == "human") {
        humanScore++
      }else {
        computerScore++;
      }
    }
function advanceRound() {
    currentRoundNumber++;
}
