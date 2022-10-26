var choices = ["Rock", "Paper", "Scissors"];

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
        // Player Lose Statements
    } else if ((computerChoice === "Scissors" && playerChoice === "Paper") || (computerChoice === "Paper" && playerChoice === "Rock") || (computerChoice === "Rock" && playerChoice === "Scissors")) {
        document.getElementById("result").innerHTML = "You Lose!";
    }
}

function playRound(playerInput) {
    console.log(playerInput);
    var computerInput = getComputerChoice();
    document.getElementById("computer-output").innerHTML = `Computer chose ${computerInput}`;
    compare(computerInput, playerInput);
}

/*
function playRound() {
    var playerInput = document.getElementById("playerInput").value;
    console.log(playerInput);
    var computerInput = getComputerChoice();
    compare(computerInput, playerInput);
}
*/