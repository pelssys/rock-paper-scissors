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

let computerChoice;
let numRock = 0;
let numPaper= 0;
let numScissor = 0;

for(let i=0; i<100; i++){
    computerChoice = getComputerChoice();
    switch(computerChoice){
        case ROCK:
            numRock++;
        case PAPER:
            numPaper++;
        case SCISSOR:
            numScissor++;
    }
}

console.log(`Rock;${numRock} Paper;${numPaper} Scissor;${numScissor}`);

