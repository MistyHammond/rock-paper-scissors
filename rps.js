var choices = ["Rock", "Paper", "Scissors"];
let playerLives = 5;
let computerLives = 5;
let round = 0;

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice, choices[computerChoice]);
    return computerChoice;
}

function compare(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        document.getElementById("result").innerHTML = "You Tie!";
        // Player Win Statements
    } else if ((computerChoice === "Scissors" && playerChoice === "Rock") || (computerChoice === "Paper" && playerChoice === "Scissors") || (computerChoice === "Rock" && playerChoice === "Paper")) {
        document.getElementById("result").innerHTML = "You Win!";
        computerLives -= 1;
        // Player Lose Statements
    } else if ((computerChoice === "Scissors" && playerChoice === "Paper") || (computerChoice === "Paper" && playerChoice === "Rock") || (computerChoice === "Rock" && playerChoice === "Scissors")) {
        document.getElementById("result").innerHTML = "You Lose!";
        playerLives -= 1;
    }
    document.getElementById("player-lives").innerHTML = `Player lives: ${playerLives}`;
    document.getElementById("computer-lives").innerHTML = `Computer lives: ${computerLives}`;
}

function playRound(playerInput) {
    if (playerLives === 0 || computerLives === 0) {
        return
        } 
    console.log(playerInput);
    var computerInput = getComputerChoice();
    document.getElementById("computer-output").innerHTML = `Computer chose ${computerInput}`;
    compare(computerInput, playerInput);
    if (playerLives === 0 || computerLives ===0) { 
    document.getElementById("round-container").style.display ='flex';
    }
}

function newRound() {
    playerLives = 5;
    computerLives = 5;
    document.getElementById("player-lives").innerHTML = `Player lives: ${playerLives}`;
    document.getElementById("computer-lives").innerHTML = `Computer lives: ${computerLives}`;
    document.getElementById("round-container").style.display ='none';
}