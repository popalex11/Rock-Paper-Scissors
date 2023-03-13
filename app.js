

function toLower(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const MyArray = ["rock", "paper", "scissors"]

function computersChoice(){
    return MyArray[~~(Math.random() * MyArray.length)]
}

function playerSelection(){
    let choice = prompt("Enter your choice:")
    return toLower(choice);
}

function singleRound(playerSelection, computerSelection){
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "That's a tie!";
        }
        if (computerSelection === "scissors"){
            return "You Won! Rock beats Scissors!";
        }
        if (computerSelection === "paper"){
            return "You Lose! Paper beats Rock!";
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "paper"){
            return "That's a tie!";
        }
        if (computerSelection === "rock"){
            return "You Won! Paper beats Rock!";
        }
        if (computerSelection === "scissors"){
            return "You Lose! Scissors beat Paper!";
        }
    } else if (playerSelection === "scissors"){
        if (computerSelection === "scissors"){
            return "That's a tie!";
        }
        if (computerSelection === "paper"){
            return "You Won! Scissors beats Paper!";
        }
        if (computerSelection === "rock"){
            return "You Lose! Rock beats Scissors!";
        }
    } else {
        return "Incorrect input!";
    }
}

function fiveRounds() {
    let result, playerCount = 0, computerCount = 0;
    for(let i = 0; i<5; i++){
        player = playerSelection();
        computer = computersChoice();
        result = singleRound(player, computer);
        console.log(player);
        console.log(computer);
        console.log(result);
        if((result =="You Won! Rock beats Scissors!")||(result =="You Won! Paper beats Rock!")||(result=="You Won! Scissors beats Paper!")){
            playerCount++;
        } 
        if ((result == "You Lose! Paper beats Rock!")||(result == "You Lose! Scissors beat Paper!")||(result =="You Lose! Rock beats Scissors!") ){
            computerCount++;
        }
    }
    console.log("Player got " + playerCount + " wins. Computer got " + computerCount +  " wins.");
}


fiveRounds();


