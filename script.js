function getComputerChoice() {
    gestures = ['Rock', 'Paper', 'Scissors'];
    gesture = gestures[Math.floor(Math.random() * 3)];
    return gesture;
}



function round(event) {
    div1 = document.querySelector('div');
    playerSelection = event.target.textContent.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection) {
        div1.textContent = "It's a tie!";
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            div1.textContent = "You Lose! Rock beats Scissors!";
            div1.computerScore += 1;
        }
        else {
            div1.textContent = "You Win! Scissors beats paper!";
            div1.playerScore += 1;
        }
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            div1.textContent = "You Lose! Paper beats Rock!";
            div1.computerScore += 1;
        }
        else {
            div1.textContent = "You Win! Rock beats Scissors!";
            div1.playerScore += 1;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            div1.textContent = "You Lose! Scissors beats Paper!";
            div1.computerScore += 1;
        }
        else {
            div1.textContent = "You Win! Paper beats Rock!";
            div1.playerScore += 1;
        }
    }
    div1.textContent += `\nRunning score: You: ${div1.playerScore} Computer: ${div1.computerScore}`;
    if ((div1.playerScore == 5) || (div1.computerScore == 5)) {
        if (div1.computerScore == 5) {
            div1.textContent = `The computer won ${div1.computerScore}-${div1.playerScore}`;
        }
        else {
            div1.textContent = `You won ${div1.playerScore}-${div1.computerScore}`;
        }
        div1.playerScore = 0;
        div1.computerScore = 0;
    }

}

function createButtons () {
    rockBtn = document.createElement('button');
    rockBtn.textContent = "Rock";
    paperBtn = document.createElement('button');
    paperBtn.textContent = "Paper";
    scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = "Scissors";
    body = document.querySelector('body');
    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);
}

function add_listeners(btns) {
    for (btn of btns) {
        btn.addEventListener('click', round);
    }
}

function game() {
    createButtons();
    btns = document.querySelectorAll('button');
    div1 = document.createElement('div');
    body = document.querySelector('body');
    body.appendChild(div1);
    div1.textContent = "Pick your gesture"
    div1.playerScore = 0;
    div1.computerScore = 0;
    add_listeners(btns);
}

game();
/*
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
    */