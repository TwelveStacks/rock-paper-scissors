var playerScore = 0;
var computerScore = 0;
var gameState = true;

function restartGame() {
    gameState = true;
    playerScore = 0;
    computerScore = 0;
    winner.textContent = "";
    end.textContent = "";
    playerScoreCounter.textContent = playerScore;
    computerScoreCounter.textContent = computerScore;
}

function getPlayerSelection() {
    const choice = prompt("Rock, paper, or scissors?")
    console.log("Player chose: " + choice)
    return choice;
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        console.log("CPU chose: rock")
        return 'rock';
    }
    else if (choice === 2) {
        console.log("CPU chose: paper")
        return 'paper';
    }
    else {
        console.log("CPU chose: scissors")
        return 'scissors';
    }
    
}

const container = document.querySelector('.status');

const winner = document.querySelector('.winner');

const playerScoreCounter = document.querySelector('.playerScore');

const computerScoreCounter = document.querySelector('.computerScore');

playerScoreCounter.textContent = playerScore;
computerScoreCounter.textContent = computerScore;

const btn = document.querySelector('#choices');

const end = document.createElement('div');

btn.addEventListener("click", (e) => {
    playRound(e.target.id,getComputerChoice());
    console.log(e.target.id);
    playerScoreCounter.textContent = playerScore;
    computerScoreCounter.textContent = computerScore;
    if (playerScore == 5) {
        end.textContent = "You win!"
        gameState = false;
    }
    else if (computerScore == 5) {
        end.textContent = "CPU wins!"
        gameState = false;
    }
});

const restart = document.querySelector('.restart');

restart.addEventListener("click", () => {
    restartGame();
});

container.append(winner);
container.append(end);


function playRound(playerSelection, getComputerChoice) {
    if (gameState === true) {
        if ((playerSelection === 'rock') && (getComputerChoice === 'paper')) {
            computerScore++;
            winner.textContent =  "Paper beats rock! You lose!";
        }
        else if ((playerSelection === 'rock') && (getComputerChoice === 'scissors')) {
            computerScore++;
            winner.textContent =  "Scissors beats paper! You lose!";
        }
        else if ((playerSelection === 'paper') && (getComputerChoice === 'rock')) {
            playerScore++;
            winner.textContent =  "Paper beats rock! You win!";
        }
        else if ((playerSelection === 'paper') && (getComputerChoice === 'scissors')) {
            computerScore++;
            winner.textContent =  "Scissors beats paper! You lose!";
        }
        else if ((playerSelection === 'scissors') && (getComputerChoice === 'rock')) {
            computerScore++;
            winner.textContent =  "Rock beats scissors! You lose!";
        }
        else if ((playerSelection === 'scissors') && (getComputerChoice === 'paper')) {
            playerScore++;
            winner.textContent =  "Scissors beats paper! You win!";
        }
        else if (playerSelection == getComputerChoice){
            winner.textContent =  "Tie";
        }
    }
}

// function game() {
//     let playerSelection = '';
//     let computerSelection = '';
//     for (i = 0; i < 5; i++) {
//         playerSelection = getPlayerSelection();
//         computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("Player Score: " + playerScore);
//         console.log("Computer Score: " + computerScore);
//         console.log("-------------------------");
//     }
    
// }

