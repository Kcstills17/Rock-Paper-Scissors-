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

const scoreBoard = () =>  {
  const scoreTally = document.createElement("div");
scoreTally.classList.add('score');
 score = document.body.appendChild(scoreTally);
}

const result = (e) => {
  console.log(e.target); 
  const playerSelection = e.target.innerText.toLowerCase(); 
  const computerSelection = computerPlay();
  console.log(playerScore,computerScore, playRound(playerSelection, computerSelection));
  

  
  score.innerHTML = `You chose ${playerSelection} <br> The opponent chooses ${computerSelection} <br> Your score = ${playerScore} <br> The opponent's score = ${computerScore}`

   if (playerScore == 5  && computerScore < 5 || computerScore == 5 && playerScore < 5 ) {
  score.innerHTML = "Game Over!!!!";
    const gameEnd = document.createElement('div'); 
    gameEnd.classList.add('gameEnd')
     appendGameEnd = document.body.appendChild(gameEnd)
     
     rock.setAttribute('disabled', 'disabled')
     paper.setAttribute('disabled', 'disabled')
     scissors.setAttribute('disabled', 'disabled');
     if(playerScore > computerScore) {
      gameEnd.innerHTML = `you've defeated the opponenet with a score of ${playerScore} to ${computerScore};`
      gameEnd.style.color = 'aqua';
      const playAgain = document.createElement('div');
      playAgain.classList.add('playAgain');
      playAgainBtn = document.createElement('button');
      playAgainBtn.classList.add('playAgainBtn')
      document.body.appendChild(playAgain);
      playAgain.appendChild(playAgainBtn);
      playAgainBtn.style.backgroundColor = "navy";
      playAgainBtn.style.color = 'aqua';
      playAgainBtn.innerText = "Congratulations!! Want to run it back?"

     } else {
      gameEnd.innerHTML = `you've lost to your opponent ${computerScore} to ${playerScore};`
      gameEnd.style.color = 'crimson';
      gameEnd.style.backgroundColor = 'black';
      gameEnd.style.borderColor = "crimson";
      const playAgain = document.createElement('div');
      playAgain.classList.add('playAgain');
      playAgainBtn = document.createElement('button');
      playAgainBtn.classList.add('playAgainBtn')
      document.body.appendChild(playAgain);
      playAgain.appendChild(playAgainBtn);
      playAgainBtn.innerText = "Better Luck next time. Play Again?"
      playAgainBtn.style.color = 'red'
      playAgainBtn.style.backgroundColor = "black";

     }


     
     
  
}
}



let btn = document.querySelector("#buttons");

btn.addEventListener('click', scoreBoard, {once:true})
 // event listner that used the scoreBoard function as a callback so we can remove it later. 
// below we use function(e) in the parameters and then result(e) within because in the function result there is a e.target variable that is not connected to e in this event listener. By using this syntax we combine the two e event listeners and we are able to callback the function. 
btn.addEventListener('click', function(e){
  result(e);
  e.stopPropagation();
 
})

playAgainBtn.addEventListener('click', e=> {
  document.location.reload = true; 
})
  


 
 

   