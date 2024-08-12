
function getComputerChoice() {
    let num = Math.random()
    if (num < (1/3)) {
        return "rock"
    } else if (num < (2/3)) {
        return "paper"
    } else {return "scissors"}
}

function getHumanChoice() {
    let choice = prompt("Choose either rock, paper, or scissors! :)")
    choice = choice.toLowerCase()
    switch (choice) {
        case "rock":
            return "rock"
        case "paper":
            return "paper"
        case "scissors":
            return "scissors"
        default:
            console.log("You must make a valid choice." + " " + choice + " is not a valid choice.")
            return getHumanChoice()
    }
}


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let choice = button.classList[0]
        playRound(choice, getComputerChoice())
    })
})

let humanScore = 0
let computerScore = 0
const computerScoreNode = document.getElementById("comp-score")
const humanScoreNode = document.getElementById("human-score")
const displayText = document.getElementById("display-text")


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        displayText.textContent =  `You both played ${humanChoice}! It's a tie!`
    } else if (humanChoice == "rock" && computerChoice == "scissors"
                || humanChoice == "scissors" && computerChoice == "paper"
                || humanChoice == "paper" && computerChoice == "rock") {
        displayText.textContent = `${humanChoice} beats ${computerChoice}! You win! :)`
        humanScore ++;
    } else {
        displayText.textContent = `${computerChoice} beats ${humanChoice}! You lose! :(`
        computerScore++;
    }
    displayScore()
    checkWinner()
}

function displayScore() {
    computerScoreNode.textContent = `${computerScore}`
    humanScoreNode.textContent = `${humanScore}`
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        display
    }
}