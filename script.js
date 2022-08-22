function getComputerChoice(){
    let myArray = ["Rock", "Paper", "Scissors"];

    let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        return "Tie";
    } else if (computerSelection === "Paper" && playerSelection === "Rock"){
        return "You Lose! Paper Beats Rock!";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        return "You Lose! Scissors Beat Paper!";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        return "You Lose! Rock Beats Scissors!";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        return "You win! Scissors beat Paper!";
    } else if (computerSelection === "Rock" && playerSelection === "Paper"){
        return "You Win! Paper Beats Rock!";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        return "You Win! Rock Beats Scissors!";
    } 
}

const playerSelection = prompt("Start the game by picking Rock, Paper, or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection));