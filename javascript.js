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

function getHumanChoice () {}