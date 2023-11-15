let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function disableButtons() {
    buttons.forEach(b => {
        b.disabled = true;
    });
};

function getRandomChoice() {
    const rps = ['rock', 'paper', 'scissors'];
    return rps[Math.floor(Math.random() * rps.length)];
};

function playRound(playerSelection) {
    let computerSelection = getRandomChoice();
    let result = '';

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore += 1;
        result = (`You win! ${playerSelection} beats ${computerSelection}. <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`);

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to restart the game.'
            disableButtons();
        }
    } else if (playerSelection == computerSelection) {
        result = (`It's tie. You both choose ${playerSelection}. <br><br>Player turn: ${playerScore} <br>Computer score: ${computerScore}`);
    } else {
        computerScore += 1;
        result = (`You lose! ${computerSelection} beats ${playerSelection}. <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`);

        if (computerScore == 5) {
            result += `<br><br>I won the game! Reload the page to restart the game.`
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    return
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});