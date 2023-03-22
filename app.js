let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function toLower(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const Choises = ["rock", "paper", "scissors"]

function computersChoice(){
    return Choises[~~(Math.random() * Choises.length)]
}


function singleRound(playerSelection, computerSelection){
    if( playerSelection === computerSelection){
        roundWinner = 'tie';
    }
    if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore++;
        roundWinner = 'player'
    }
    if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        computerScore++;
        roundWinner = 'computer'
    }
    messageUpdateScore(roundWinner, playerSelection, computerSelection);
}

function messageUpdateScore(roundWinner, playerSelection, computerSelection){
    if(roundWinner === 'player'){
        afterRoundMessage.textContent = playerSelection + " beats " + computerSelection;
        return ;
    }
    if(roundWinner === 'computer'){
        afterRoundMessage.textContent = playerSelection + " is beaten by " + computerSelection;
        return ;
    }
    afterRoundMessage.textContent = playerSelection + ' ties with ' + computerSelection
}

function isGameOver(){
    return playerScore === 5 || computerScore ===5;
}


function clickedButton(playerSelection){
    if(isGameOver()){
        openEndGameModal();
        return;
    }

    const computerSelection = computersChoice()
    singleRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    scoreUpdate();

    if(isGameOver()) {
        openEndGameModal();
        finalMessage();
    }
}

const scoreInfo = document.getElementById('score-information');
const afterRoundMessage = document.getElementById('score-message');
const playerScoreParameter = document.getElementById('score1');
const computerScoreParameter = document.getElementById('score2');
const playerSign = document.getElementById('choice1');
const computerSign = document.getElementById('choice2');
const buttonRock = document.getElementById('buttonRock');
const buttonPaper = document.getElementById('buttonPaper');
const buttonScissors = document.getElementById('buttonScissors');
const gameEndModal = document.getElementById('gameEndModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

buttonRock.addEventListener('click', () => clickedButton('rock'));
buttonPaper.addEventListener('click', () => clickedButton('paper'));
buttonScissors.addEventListener('click', () => clickedButton('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndGameModal);


function updateChoices(playerSelection, computerSelection){
    switch (playerSelection) {
        case 'rock':
            playerSign.textContent = 'ROCK'
            break
        case 'paper':
            playerSign.textContent = "PAPER"
            break
        case 'scissors':
            playerSign.textContent = 'SCISSORS'
            break
    }

    switch (computerSelection) {
        case 'rock':
            computerSign.textContent = 'ROCK'
            break
        case 'paper':
            computerSign.textContent = "PAPER"
            break
        case 'scissors':
            computerSign.textContent = 'SCISSORS'
            break
    }
}

function messageUpdateScore(roundWinner, playerSelection, computerSelection){
    if(roundWinner === 'player'){
        afterRoundMessage.textContent = playerSelection + " beats " + computerSelection;
        return ;
    }
    if(roundWinner === 'computer'){
        afterRoundMessage.textContent = playerSelection + " is beaten by " + computerSelection;
        return ;
    }
    afterRoundMessage.textContent = playerSelection + ' ties with ' + computerSelection
}

function scoreUpdate() {
    if(roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!";
    } else if ( roundWinner === 'player'){
        scoreInfo.textContent = 'You won!';
    } else if ( roundWinner === 'computer'){
        scoreInfo.textContent = "You lost!"
    }
    playerScoreParameter.textContent = "Player: " + playerScore;
    computerScoreParameter.textContent = "Computer: " + computerScore;
}

function openEndGameModal(){
    gameEndModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndGameModal(){
    gameEndModal.classList.remove('active');
    overlay.classList.remove('active');
}

function finalMessage(){
    return playerScore > computerScore
        ? (endgameMsg.textContent = "You won!")
        : (endgameMsg.textContent = "You lost!")
}

function restartGame(){
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose Rock/Paper/Scissors'
    afterRoundMessage.textContent = 'First to score 5 points wins'
    playerScoreParameter.textContent = 'Player: 0'
    computerScoreParameter.textContent = 'Computer: 0'
    playerSign.textContent = '?'
    computerSign.textContent = '?'
    gameEndModal.classList.remove('active')
    overlay.classList.remove('active')
}


document.getElementById("restartBtn").click();