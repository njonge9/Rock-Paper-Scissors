let playerScores = 0;
let computerScores = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'You tie!'
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScores ++;
        return 'You lost! Paper covers Rock!!'
    }else if(computerSelection === 'rock' && playerSelection === 'paper') { 
        playerScores ++;
        return 'You win! Paper covers Rock!!'
    }else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScores++;
        return 'You win! Rock crushes Scissors';
    }else if(computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScores++;
        return 'You lost! Rock crushes Scissors';
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScores++;
        return 'You lost! Scisssors cuts paper!!'; 
    }else if(computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScores++;
        return 'You win! Scissors cuts Paper!!' 
    }
}



function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose paper, rock or scissors?').toLowerCase()
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    }
    if(playerScores > computerScores){
        return `Player wins`
    }else if(playerScores < computerScores){
        return `Computer wins`
    }else {
        return `You tied!!`
    }
}

console.log(game())