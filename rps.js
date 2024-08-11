console.log(`Run the function "playGame()" to get started!`)


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





function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie! Play again")
        } else if (humanChoice == "rock" && computerChoice == "scissors"
                    || humanChoice == "scissors" && computerChoice == "paper"
                    || humanChoice == "paper" && computerChoice == "rock") {
            console.log( humanChoice + " beats " + computerChoice + ". You win! :)")
            humanScore ++;
        } else {console.log( computerChoice + " beats " + humanChoice + ". You lose! :(")
            computerScore++;
        }
    }

    for (let i = 1; i < 6; i++) {
        console.log("Time for Round " + i + "/5! The score is Human: " + humanScore + ", Robot: " + computerScore + ".")
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore) {console.log("You've won the game " + humanScore + " to " + computerScore + " ! :)")}
    else if (computerScore > humanScore) (console.log("You've lost the game " + computerScore + " to " + humanScore + " ! :("))
    else {console.log("It's a tie of " + humanScore + " to " + computerScore + " !")}
}