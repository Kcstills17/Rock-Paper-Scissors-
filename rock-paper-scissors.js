// Starting a Rock-Paper-Scissors Project //

  let playRound = function(playerSelection, computerSelection) {
      if (playerSelection == "Rock" && computerSelection == "Rock") {
          return "Both choose Rock. It is a tie!";
      }  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
          return "You win! Rock beats Scissors!";
      }  else if (playerSelection == "Rock" && computerSelection == "Paper") {
          return "You lose! Paper beats Rock.";
      }   else if (playerSelection == "Paper" && computerSelection == "Rock"){
          return "You win! Paper beats Rock!";
      }  else if (playerSelection == "Paper" && computerSelection == "Paper"){
        return "Both choose Paper. It is a tie!";
      } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose! Scissors beats Paper.";
      } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors.";
      } else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "Both choose Scissors! It is a tie!.";
      } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win! Scissors beats Paper."; 
      }  else {
          return "not a valid choice. Please choose agaain"
      }

  }
let computerPlay = function () {
    let choices = ['Rock', 'Paper', 'Scissors'];


let randomChoice = choices[Math.floor(Math.random() * choices.length)];
 return (`${randomChoice}`);
}

 
const playerSelection = prompt("Rock, Papers, or Scissors?")

const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

 let game = function () {
     return (playRound(playerSelection, computerSelection));

 }
 game();

   