const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

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