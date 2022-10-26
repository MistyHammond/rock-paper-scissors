var choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice, choices[computerChoice]);
    return computerChoice;
}

function compare(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        alert ("You Tie!");
        // Player Win Statements
    } else if ((computerChoice === "Scissors" && playerChoice === "Rock") || (computerChoice === "Paper" && playerChoice === "Scissors") || (computerChoice === "Paper" && playerChoice === "Scissors")) {
        alert ("You Win!")
        // Player Lose Statements
    } else if ((computerChoice === "Scissors" && playerChoice === "Paper") || (computerChoice === "Paper" && playerChoice === "Rock") || (computerChoice === "Rock" && playerChoice === "Scissors")) {
        alert ("You Lose!")
    }
}

function playRound() {
    var playerInput = document.getElementById("playerInput").value;
    console.log(playerInput);
    var computerInput = getComputerChoice();
    compare(computerInput, playerInput);
}