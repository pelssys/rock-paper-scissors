const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

let humanScore;
let computerScore;

function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum < 0.333){
        return ROCK;
    } else if(randomNum >= 0.333 && randomNum < 0.666){
        return PAPER;
    } else {
        return SCISSOR;
    }
}

function getHumanChoice(){
    let successFlag = 0;
     while(successFlag == 0){
        let userInput = prompt("Rock, paper or scissor?").toLowerCase();
         if(userInput === ROCK){
            successFlag = 1;
            return userInput;
         } else if(userInput === PAPER){
            successFlag = 1;
            return userInput;
         } else if(userInput === SCISSOR){
            successFlag = 1;
            return userInput;
         }
     }
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === ROCK){
        switch(computerChoice){
            case ROCK:
                console.log(`Draw.\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
            case PAPER:
                computerScore++;
                console.log(`Ah, wrapped up, you lose!\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
            case SCISSOR:
                humanScore++;
                console.log(`You're rock-hard, win!\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
        }
    }

    if(humanChoice === PAPER){
        switch(computerChoice){
            case ROCK:
                humanScore++;
                console.log(`You wrapped up the rock, win!\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
            case PAPER:
                console.log(`Draw.\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
            case SCISSOR:
                computerScore++;
                console.log(`Shit! Chopped up by scissor.\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
        }
    }

    if(humanChoice === SCISSOR){
        switch(computerChoice){
            case ROCK:
                computerScore++;
                console.log(`Keep your scissor safe. You lose!\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
            case PAPER:
                humanScore++;
                console.log(`Cut paper into pieces. You win!\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
            case SCISSOR:
                console.log(`Draw.\nSCORE: You[${humanScore}], Computer[${computerScore}]`);
                break;
        }
    }
}

function playGame(){

    let humanSelection;
    let computerSelection;

    humanScore = 0;
    computerScore = 0;

    for(let i=0; i<5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore>computerScore){
        console.log(`OVERALL SCORE: You[${humanScore}], Computer[${computerScore}]\nYOU WON!`);
    } else if(humanScore==commputerScore){
        console.log(`OVERALL SCORE: You[${humanScore}], Computer[${computerScore}]\nEVEN!`);
    } else if(humanScore<computerScore){
        console.log(`OVERALL SCORE: You[${humanScore}], Computer[${computerScore}]\nYOU LOST!`);
    }
}

playGame();