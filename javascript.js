const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const buttons = document.querySelectorAll('.button');
const gameResult = document.querySelector('#game-result');

let playerScore;
let computerScore;

function toPascalCase(str){
    str = str[0].toUpperCase()+ str.slice(1,str.length);
    return str;
}

function startGame(){
    playerScore = 0;
    computerScore = 0;
    gameResult.innerHTML = `<br><br>`
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function playPlayer(move) {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = move;
        playRound(playerSelection, playComputer());
    }
    else {
        checkWin();
    }
}
function playComputer() {
    let moves = ['Rock', 'Paper', 'Scissors']
    return moves[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = toPascalCase(playerSelection.toString());

    if (playerSelection === computerSelection) {
        gameResult.innerHTML = `Tie<br><br>`;
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        playerScore++;
        gameResult.innerHTML = `${playerSelection} beats ${computerSelection}
        <br>Player Wins `;
    }
    else {
        computerScore++;
        gameResult.innerHTML = `${toPascalCase(computerSelection)} beats ${playerSelection}
        <br>Computer Wins `;
    }

    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function checkWin() {
    if (playerScore === 5) {
        if (confirm('Player Wins! \nReplay?')) {
            startGame();
        }
        else {
            alert('Actually i dont\'t have any other stuff to show you sooo \nbye bye');
            close();
        }
    }
    else if (computerScore === 5) {
        if (confirm('Computer Wins! \nReplay?')) {
            startGame();
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

function clickableButton(button) {
    button.addEventListener('click', function () { playPlayer(button.id); });
}

startGame();
buttons.forEach(clickableButton);