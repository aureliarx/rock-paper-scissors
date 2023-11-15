let playerScore = 0;
let computerScore = 0;
let winnerRound = '';
let result = '';
const buttons = document.querySelectorAll('input');
const restart = document.getElementById('restart');
restart.hidden = true;

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.value));
});

function disableButtons() {
    buttons.forEach(b => {
        b.disabled = true;
    });
};

function reloadGame() {
    window.location.reload('restart');
}

function getRandomChoice() {
    const rps = ['rock', 'paper', 'scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
};

function playRound(playerSelection) {
    let computerSelection = getRandomChoice();

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore += 1;
        winnerRound = 'player';
        
        result = (`You win! ${playerSelection} beats ${computerSelection}. <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`);

        gameOver(playerScore);
    } else if (playerSelection == computerSelection) {
        result = (`It's tie. You both choose ${playerSelection}. <br><br>Player turn: ${playerScore} <br>Computer score: ${computerScore}`);
    } else {
        computerScore += 1;
        winnerRound = 'computer';

        result = (`You lose! ${computerSelection} beats ${playerSelection}. <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`);

        gameOver(computerScore);
    }

    document.getElementById('result').innerHTML = result;
    return result;
};

function gameOver(score) {
    if (score == 5) {
        disableButtons();
        if (winnerRound == 'player') {
            result += '<br><br>Yay! You won the game!'
        } else {
            result += '<br><br>Haha! I won the game!'
        }

        restart.hidden = false;
        restart.addEventListener('click', reloadGame);
    }
    document.getElementById('result').innerHTML = result;
    return result;
};