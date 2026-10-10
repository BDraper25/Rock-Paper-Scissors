// Create function that randomly returns an integer
// Assign the integer values to rock, paper, and scissors
// Return the result of the random integer
// Rock, paper, and scissors should be ouput as string values

function getComputerChoice () {
    let integer = Math.floor(Math.random() * 3);
    if (integer === 0) {
        return "rock"
    } else if (integer === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Create function for human choice of rock, paper, scissors
// Have function display a prompt to input one of the options
// Create a text field/box for the human input
// The text field should include a submit/next button for submission
// The human choice should display below the computer choice in the console

function getHumanChoice () {
    let choice = window.prompt("Enter your choice of 'rock', 'paper', or 'scissors':", "Choice");
    return choice;
}

// Write a function that takes human and computer choices as arguments
// The parameters will be humanChoice and computerChoice
// Make humanChoice case insensitive
// Create variables that will become the arguments to pass to function that store the players choices
// After both choices are made, increment the winners score and log a winner announcement


// Write a function and move playRound and the score variables into it
// The function will play 5 rounds and keep track of scores
// The function will declare a winner after the 5 rounds finish

function playGame () {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!");
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + "!");
        computerScore++;
    }
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(humanSelection);

playRound(humanSelection, computerSelection);