// Starting a Rock-Paper-Scissors Project //
let playerScore = 0; 
let computerScore = 0; 

  let playRound = function(playerSelection, computerSelection) {
      if (playerSelection ==  computerSelection) {
          return ("Both choose Rock. It is a tie!");
      }  else if (playerSelection == "rock" && computerSelection == "scissors") {
          playerScore++
          return ("You win! Rock beats Scissors!");
      }  else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
          return ("You lose! Paper beats Rock.");
      }   else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++
          return ("You win! Paper beats Rock!");
      } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return ("You Lose! Scissors beats Paper.");
      } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++
        return ("You Lose! Rock beats Scissors.");
      } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        return ("You win! Scissors beats Paper."); 
      }  else {
          return ("not a valid choice. Please choose again")
      }
    
  }
let computerPlay = function () {
    let choices = ['rock', 'paper', 'scissors'];


let randomChoice = choices[Math.floor(Math.random() * choices.length)];
 return (`${randomChoice}`);
}

 
const playerSelection = prompt("Rock, Papers, or Scissors?")

const computerSelection = computerPlay();

   

const game = function() {
 
  for (let i = 0; i < 5; i++) 
  {
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playerScore,computerScore, playRound(playerSelection, computerSelection));
  }

 if (playerScore > computerScore) {
   return "Congratulations! You are the Rock Paper Scissors Champ!!!"
 } else if (playerScore < computerScore) {
   return "You have lost the game. Please try again some other time. "
 } else {
   return "a Tie? C'mon Guys";
 }
}
console.log(game());
 
 

   