btn.addEventListener('click', function (e) {
    console.log(e);
  });


var playerScore = 0;
var computerScore = 0;

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

const container = document.querySelector('#choices');

const div = document.createElement('div');

const rock = document.querySelector('.rock');

rock.addEventListener("click", playRound('rock', getComputerChoice()));



function playRound(playerSelection, getComputerChoice) {
    if ((playerSelection === 'rock') && (getComputerChoice === 'paper')) {
        computerScore++;
        div.textContent =  "Paper beats rock! You lose!";
        container.append(div);
    }
    else if ((playerSelection === 'rock') && (getComputerChoice === 'scissors')) {
        computerScore++;
        div.textContent =  "Scissors beats paper! You lose!";
        container.append(div);
    }
    else if ((playerSelection === 'paper') && (getComputerChoice === 'rock')) {
        playerScore++;
        div.textContent =  "Paper beats rock! You win!";
        container.append(div);
    }
    else if ((playerSelection === 'paper') && (getComputerChoice === 'scissors')) {
        computerScore++;
        div.textContent =  "Scissors beats paper! You lose!";
        container.append(div);
    }
    else if ((playerSelection === 'scissors') && (getComputerChoice === 'rock')) {
        computerScore++;
        div.textContent =  "Rock beats scissors! You lose!";
        container.append(div);
    }
    else if ((playerSelection === 'scissors') && (getComputerChoice === 'paper')) {
        playerScore++;
        div.textContent =  "Scissors beats paper! You win!";
        container.append(div);
    }
    else {
        div.textContent =  "Tie";
        container.append(div);
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

