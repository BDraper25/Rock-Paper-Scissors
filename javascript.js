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

// Write a function that takes human and computer choices as arguments
// The parameters will be humanChoice and computerChoice
// Make humanChoice case insensitive
// Create variables that will become the arguments to pass to function that store the players choices
// After both choices are made, increment the winners score and log a winner announcement

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (
                    (humanChoice === "rock" && computerChoice === "scissors") || 
                    (humanChoice === "paper" && computerChoice === "rock") || 
                    (humanChoice === "scissors" && computerChoice === "paper")
                ) {
            console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + "!");
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + "!");
            computerScore++;
        }
}


const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.addEventListener('click', function() {
    playRound("Rock", getComputerChoice())
});

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.addEventListener('click', playRound);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener('click', playRound);

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);