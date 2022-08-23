let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    let myArray = ["rock", "paper", "scissors"];
    let randomItem = Math.floor(Math.random()*myArray.length);
    const compChoice = myArray[randomItem];
    return compChoice;
}

function playRound(computerSelection, playerSelection){
    if (computerSelection === "rock" && playerSelection === "rock") {
        return "Tie";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "Tie";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return "Tie";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        compScore++;
        return "You lost.";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        return "You won.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        compScore++;
        return "You lost.";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        return "You won.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        compScore++;
        return "You lost.";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        return "You won.";
    }
}

const playerSelection = "rock"

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock, paper, or scissors?").toLowerCase;
        const computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection);
    }

    if (playerScore > compScore) {
        return "You beat the computer!";
    } else if (playerScore < compScore) {
        return "You got beat by the computer!";
    } else {
        return "Tie!"
    }
}

console.log(game());