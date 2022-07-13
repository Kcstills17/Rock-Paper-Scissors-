// Starting a Rock-Paper-Scissors Project //

let computerPlay = function () {
    let choices = ['rock', 'paper', 'scissors'];


let randomChoice = choices[Math.floor(Math.random() * choices.length)];
 return (`Your opponent chooses ${randomChoice}`);
}


let userPlay = function () {
    let yourAnswer = ('Rock, Paper, or Scissors?')
   
    if(yourAnswer.toLowerCase() == "rock") {
        return ("you chose rock");
    } if(yourAnswer.toLowerCase() == "paper") {
        return ("you chose paper");
    } if(yourAnswer.toLowerCase() == "scissors") {
        return ("you chose scissors");
    } else {
        return ("Not rock, paper, or scissors. Please choose again?")
    }
    
} 

    let playRound = function(playerSelection, userSelection) {
        
    }