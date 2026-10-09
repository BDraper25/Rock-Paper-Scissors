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
console.log(getComputerChoice())

// Create function for human choice of rock, paper, scissors
// Have function display a prompt to input one of the options
// Create a text field/box for the human input
// The text field should include a submit/next button for submission
// The human choice should display below the computer choice in the console

function getHumanChoice () {
    let choice = window.prompt("Enter your choice of 'rock', 'paper', or 'scissors':", "Choice");
    return choice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);


