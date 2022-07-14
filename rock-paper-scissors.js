// Starting a Rock-Paper-Scissors Project //
let playerScore = 0; 
let computerScore = 0; 

  let playRound = function(playerSelection, computerSelection) {
      if (playerSelection == "Rock" && computerSelection == "Rock") {
          return ("Both choose Rock. It is a tie!");
      }  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
          return ("You win! Rock beats Scissors!");
      }  else if (playerSelection == "Rock" && computerSelection == "Paper") {
          return ("You lose! Paper beats Rock.");
      }   else if (playerSelection == "Paper" && computerSelection == "Rock"){
          return ("You win! Paper beats Rock!");
      }  else if (playerSelection == "Paper" && computerSelection == "Paper"){
        return ("Both choose Paper. It is a tie!");
      } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return ("You Lose! Scissors beats Paper.");
      } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return ("You Lose! Rock beats Scissors.");
      } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return ("Both choose Scissors! It is a tie!.");
      } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return ("You win! Scissors beats Paper."); 
      }  else {
          return ("not a valid choice. Please choose again")
      }
    
  }
let computerPlay = function () {
    let choices = ['Rock', 'Paper', 'Scissors'];


let randomChoice = choices[Math.floor(Math.random() * choices.length)];
 return (`${randomChoice}`);
}

 
const playerSelection = prompt("Rock, Papers, or Scissors?")

const computerSelection = computerPlay();

   

const game = function() {
 
  for (let i = 0; i < 5; i++) 
  {
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerSelection.toLowerCase == "Rock" && computerSelection.toLowerCase == "Paper") {
    return computerScore++;
  } if (playerSelection.toLowerCase == "Rock" && computerSelection.toLowerCase == "Scissors") {
    return playerScore++;
  } if (playerSelection.toLowerCase == "Paper" && computerSelection.toLowerCase == "Scissors") {
    return computerScore++;
  } if (playerSelection.toLowerCase == "Paper" && computerSelection.toLowerCase == "Rock") {
    return playerScore++;
  } if (playerSelection.toLowerCase == "Scissors" && computerSelection.toLowerCase == "Rock") {
    return computerScore++;
  } if (playerSelection.toLowerCase == "Scissors" && computerSelection.toLowerCase == "Paper") {
    return computerScore++;
  }
}
console.log(game());
 
 

   