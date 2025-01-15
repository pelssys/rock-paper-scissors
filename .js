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

//REF: show each number of R, P, S created by getComputerChoice in 100 executions
// let computerChoice;
// let numRock = 0;
// let numPaper= 0;
// let numScissor = 0;

// for(let i=0; i<100; i++){
//     computerChoice = getComputerChoice();
//     switch(computerChoice){
//         case ROCK:
//             numRock++;
//             break;
//         case PAPER:
//             numPaper++;
//             break;
//         case SCISSOR:
//             numScissor++;
//             break;
//     }
// }
// console.log(`Rock;${numRock} Paper;${numPaper} Scissor;${numScissor}`);

