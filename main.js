// choices
const choices = [...document.querySelectorAll('.image')];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
// buttons
const play_button = document.querySelector('.play-button');
const reset_button = document.querySelector('.reset-button');
// game result
const player_choice = document.querySelector('.player-choice');
const ai_choice = document.querySelector('.ai-choice');
const winner = document.querySelector('.winner');
// overall results
const player_wins = document.querySelector('.player-wins');
const ai_wins = document.querySelector('.ai-wins');
const draws = document.querySelector('.draws');

const game = {
    player: '',
    ai: '',
}
// reset border
const resetBorder = () => {
    choices.forEach(element => {
        element.classList.remove('active');
    })
}

// Player
const playerChoice = (e) => {
    resetBorder();
    e.target.classList.add('active');
    if (e.target.classList.contains('rock')) {
        game.player = 0;
    } else if (e.target.classList.contains('paper')) {
        game.player = 1;
    } else {
        game.player = 2;
    }
}

// add results to "game-results"
const adding = (choice, number) => {
    if (number == 0) {
        choice.innerHTML = "Kamień";
    } else if (number == 1) {
        choice.innerHTML = "Papier";
    } else {
        choice.innerHTML = "Nożyce";
    }
}

// Start game
const startTheGame = () => {
    if (game.player === '') {
        return alert('Choose hand');
    }
    // ai choice
    game.ai = Math.floor(Math.random() * 3);
    // game
    if (game.player === 0 && game.ai === 2 || game.player === 1 && game.ai === 0 || game.player === 2 && game.ai === 1) {
        player_wins.textContent++;
        winner.textContent = 'Gracz';
    } else if (game.player === 2 && game.ai === 0 || game.player === 0 && game.ai === 1 || game.player === 1 && game.ai === 2) {
        ai_wins.textContent++;
        winner.textContent = 'Komputer';
    } else {
        draws.textContent++;
        winner.textContent = 'Remis';
    }
    adding(player_choice, game.player);
    adding(ai_choice, game.ai);

    // reset
    resetBorder();
    game.player = '';
}

// Reset stats
const resetTheGame = () => {
    resetBorder();
    game.player = '';
    player_choice.textContent = '';
    ai_choice.textContent = '';
    winner.textContent = '';
    player_wins.textContent = '';
    ai_wins.textContent = '';
    draws.textContent = '';
}

rock.addEventListener('click', playerChoice);
paper.addEventListener('click', playerChoice);
scissors.addEventListener('click', playerChoice);
play_button.addEventListener('click', startTheGame);
reset_button.addEventListener('click', resetTheGame);