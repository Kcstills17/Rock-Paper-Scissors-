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

 


const computerSelection = computerPlay();

   

const game = function() {
 
  
  {
    const playerSelection = ("Rock, Paper, or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    (playerScore,computerScore, playRound(playerSelection, computerSelection));
  }

 if (playerScore > computerScore) {
   return "Congratulations! You are the Rock Paper Scissors Champ!!!"
 } else if (playerScore < computerScore) {
   return "You have lost the game. Please try again some other time. "
 } else {
   return "a Tie? C'mon Guys";
 }
}



let btn = document.querySelector("#buttons");

btn.addEventListener('click', e => {
  
  const scoreTally = document.createElement("div");
scoreTally.classList.add('score');
 score = document.body.appendChild(scoreTally);
 scoreBtn = document.createElement('button');
 appendScoreBtn = scoreTally.appendChild(scoreBtn);
 scoreBtn.style.width = "500px";
 scoreBtn.style.height = "200px";
 scoreBtn.style.backgroundColor = "navy";
 
 
}, 
{once:true}
 
)



btn.addEventListener('click', e => {
  const playerSelection = e.target.innerText.toLowerCase(); 
  const computerSelection = computerPlay();
  console.log(playerScore,computerScore, playRound(playerSelection, computerSelection));
score.innerHTML = `you chose ${playerSelection} <br> the opponent chooses ${computerSelection} <br> your score = ${playerScore} <br> the opponent's score = ${computerScore}`
if (playerScore >= 5) {
    const gameEnd = document.createElement('div'); 
    gameEnd.classList.add('gameEnd')
     appendGameEnd = document.body.appendChild(gameEnd)
     gameEnd.innerHTML = `you've defeated the opponenet with a score of ${playerScore} to ${computerScore};`
     gameEnd.style.color = 'red';
} else if (computerScore >= 5) {
  const gameEnd = document.createElement('div'); 
     gameEnd.classList.add('gameEnd')
     appendGameEnd = document.body.appendChild(gameEnd)
     gameEnd.innerHTML = `you've lost to your opponent by the score of  ${playerScore} to ${computerScore};`
     
}

}


 
)


console.log(game());
 
 

   