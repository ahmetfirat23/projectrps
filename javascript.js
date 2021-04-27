let playerScore;
let computerScore;
game();

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors']
    return moves[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        alert(`Tie
Player:${playerScore} Computer:${computerScore}`)
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        alert(`${playerSelection} beats ${computerSelection}
Player Wins 
Player:${playerScore} Computer:${computerScore}`);
    }
    else {
        computerScore++;
        alert(`${computerSelection} beats ${playerSelection}
Computer Wins 
Player:${playerScore} Computer:${computerScore}`);
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt('Rock Paper Scissors')
        playRound(playerSelection, computerPlay());
        console.log(`help`);
    }
    if (playerScore === 5) {
        if (confirm('Player Wins! \nReplay?')) {
            game();
        }
        else {
            alert('Actually i dont\'t have any other stuff to show you sooo \nbye bye');
            close();
        }
    }
    else if (computerScore === 5) {
        if (confirm('Computer Wins! \nReplay?')) {
            game();
        }
        else {
            alert('Actually i don\'t have any other stuff to show you sooo \nbye bye');
            close();
        }
    }
    else {
        alert('Something went pretty bad, you shouldn\'t be here.')
        location.reload();
    }
}

