const buttons = document.querySelectorAll('button');
const playerResult = document.getElementById('player-results');
const computerResult = document.getElementById('computer-results');
const finalResults = document.getElementById('final-results')



buttons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        buttons = e.target.id;
        playerResult.innerHTML = buttons;
        let computerSelection = computerPlay();
        let playerSelection = buttons;
        playRound(playerSelection, computerSelection);
      
    })
})


let playerScores = 0;
let computerScores = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoices = Math.floor(Math.random() * choices.length);
    computerResult.innerHTML = choices[randomChoices]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = `You tied! You both picked ${playerSelection}`;
        finalResults.appendChild('p');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScores++;
        const p = document.createElement('p');
        p.innerText = 'You lost! Paper covers Rock!!'
        finalResults.appendChild('p');
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScores++;
        const p = document.createElement('p');
        p.innerText = 'You win! Paper covers Rock!!'
        finalResults.appendChild('p');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScores++;
        const p = document.createElement('p');
        p.innerHTML = 'You win! Rock crushes Scissors';
        finalResults.appendChild('p')
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScores++;
        const p = document.createElement('p');
        p.innerText = 'You lost! Rock crushes Scissors';
        finalResults.appendChild('p');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        playerScores++;
        const p = document.createElement('p');
        p.innerText = 'You lost! Scisssors cuts paper!!';
        finalResults.appendChild('p')
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScores++;
        const p = document.createElement('p');
        p.innerText = 'You win! Scissors cuts Paper!!'
        p.appendChild('p');
    }
}

//let computerSelection = computerPlay();


// function game() {
//     for(let i = 0; i < 5; i++) {
//         //const playerSelection = prompt('Choose paper, rock or scissors?').toLowerCase()
//         const computerSelection = computerPlay();
//         playRound(playerSelection,computerSelection);
//     }
//     if(playerScores > computerScores){
//         return `Player wins`
//     }else if(playerScores < computerScores){
//         return `Computer wins`
//     }else {
//         return `You tied!!`
//     }
// }

// console.log(game())
