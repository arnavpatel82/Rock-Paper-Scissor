function computerPlays(max) {
    let num = Math.floor(Math.random() * max);

    if (num === 0) {
        return "Rock";

    } else if (num === 1) {
        return "Paper";

    } else {
        return "Scissor";
    }
}


function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let r = "Rock";
    let p = "Paper";
    let s = "Scissor";

    if ((playerSelection === r && computerSelection === s) || (playerSelection === p && computerSelection === r) || playerSelection === s && computerSelection === p) {
        return "You Win!";

    } else if (playerSelection === computerSelection) {
        return "It's a Tie";

    } else {
        return "You Lose!"
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Make your choice:");
        alert(round(choice, computerPlays(3)));
    }
}


const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', function () {
    console.log(round('Rock', computerPlays(3)));
});

const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', function () {
    console.log(round('Paper', computerPlays(3)));
});

const scissor_btn = document.querySelector('#scissor');
scissor_btn.addEventListener('click', function () {
    console.log(round('Scissor', computerPlays(3)));
});





// game()





