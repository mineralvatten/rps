function getComputerChoice() {
    gestures = ['Rock', 'Paper', 'Scissors'];
    gesture = gestures[Math.floor(Math.random() * 3)];
    return gesture;
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "You Lose! Rock beats Scissors!";
        }
        else {
            return "You Win! Scissors beats paper!";
        }
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return "You Lose! Paper beats Rock!";
        }
        else {
            return "You Win! Rock beats Scissors!";
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return "You Lose! Scissors beats Paper!";
        }
        else {
            return "You Win! Paper beats Rock!";
        }
    }

}

function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter Rock, Paper or Scissors: ");
        computerSelection = getComputerChoice();
        result = round(playerSelection,computerSelection);
        if (result.split(" ")[1] == "Win!") {
            wins += 1;
            console.log(result);
            resmes = `You have ${wins} wins and ${losses} losses.`;
            console.log(resmes);
        }
        else if (result.split(" ")[1] == "a") {
            console.log(result);
            resmes = `You have ${wins} wins and ${losses} losses.`;
            console.log(resmes);
            
        }
        else {
            losses += 1;
            console.log(result);
            resmes = `You have ${wins} wins and ${losses} losses.`;
            console.log(resmes);
        }
    }
}

