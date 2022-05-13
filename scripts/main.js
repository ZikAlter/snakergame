let btn_start_game = document.getElementById('btn-start-game');
let start_screen = document.querySelector('.block-start');
let game_screen = document.querySelector('.block-game');
let endgame_screen = document.querySelector('.block-endgame');
let click_repeat = document.getElementById('repeat-game');
let click_menu = document.getElementById('click-menu');
let score_end = document.getElementById('score-end');
let click_return_menu = document.getElementById('click-return-menu');
let click_restart_game = document.getElementById('click-restart-game');
let score = document.getElementById("score-block");

const sound_eat_food = new Audio('music/soundone.mp3');
const sound_gameover = new Audio('music/hitsound.mp3');
let music_cell = ['music/Hydrogen.mp3', 'music/Paris.mp3', 'music/Crystals.mp3'];
let music_rand, music_one;

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
let xSnake = 10;
let ySnake = 10;
let gs = 30;
let tc = 20;
let xApple = Math.floor(Math.random() * tc);
let yApple = Math.floor(Math.random() * tc);
let xVelocity = 0;
let yVelocity = 0;
let trail = [];
let tail = 3;
let color_cell = ['red', 'orange', '#48C0FE', 'yellow', '#AF2FB1'];
let color_rand = Math.floor(Math.random() * color_cell.length);

btn_start_game.addEventListener("click", () => {
    start_screen.classList.add('dis-none');
    game_screen.classList.remove('dis-none');
    music_rand = Math.floor(Math.random() * music_cell.length);
    music_one = new Audio(music_cell[music_rand]);
    if (localStorage.getItem('music') != 'off') {
        music_one.play();
    }
    document.addEventListener("keydown", move);
    gameTimer = setInterval(game, 90);
});

click_return_menu.addEventListener("click", () => {
    clearInterval(gameTimer);
    play_songs(click_song);
    if (localStorage.getItem('music') != 'off') {
        music_one.pause();
        music_one.currentTime = 0;
    }
    primary_parameters();
    game_screen.classList.add('dis-none');
    start_screen.classList.remove('dis-none');
});

click_restart_game.addEventListener("click", () => {
    clearInterval(gameTimer);
    play_songs(click_song);
    primary_parameters();
    document.addEventListener("keydown", move);
    gameTimer = setInterval(game, 90);
});

click_menu.addEventListener("click", () => {
    play_songs(click_song);
    if (localStorage.getItem('music') != 'off') {
        music_one.pause();
        music_one.currentTime = 0;
    }
    primary_parameters();
    endgame_screen.classList.add('dis-none');
    start_screen.classList.remove('dis-none');
});

click_repeat.addEventListener("click", () => {
    play_songs(click_song);
    primary_parameters();
    endgame_screen.classList.add('dis-none');
    game_screen.classList.remove('dis-none');
    document.addEventListener("keydown", move);
    gameTimer = setInterval(game, 90);
});

function game() {
    if (localStorage.getItem('music') != 'off') {
        music_one.onended = function () {
            music_rand = Math.floor(Math.random() * music_cell.length);
            music_one = new Audio(music_cell[music_rand]);
            music_one.play();
        };
    }
    xSnake += xVelocity;
    ySnake += yVelocity;
    if (xSnake < 0) {
        xSnake = tc - 1;
    } else if (xSnake > tc - 1) {
        xSnake = 0;
    } else if (ySnake < 0) {
        ySnake = tc - 1;
    } else if (ySnake > tc - 1) {
        ySnake = 0;
    }
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'lime';
    context.shadowColor = 'lime';
    context.shadowBlur = 10;
    for(let i = 0; i < trail.length; i++){
        context.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if ((trail[i].x == xSnake) && (trail[i].y == ySnake) && (tail >= 4)) {
            play_songs(sound_gameover);
            endgame();
        }
    }
    trail.push({x: xSnake, y: ySnake});
    while(trail.length > tail){
        trail.shift();
    }
    if ((xApple == xSnake) && (yApple == ySnake)) {
        play_songs(sound_eat_food);
        score.innerText = +score.innerText + 1;
        tail++;
        xApple = Math.floor(Math.random() * tc);
        yApple = Math.floor(Math.random() * tc);
        color_rand = Math.floor(Math.random() * color_cell.length);
        context.fillStyle = color_cell[color_rand];
        context.shadowColor = color_cell[color_rand];
        context.shadowBlur = 15;
    }
    context.fillStyle = color_cell[color_rand];
    context.shadowColor = color_cell[color_rand];
    context.shadowBlur = 15;
    context.fillRect(xApple * gs, yApple * gs, gs - 2, gs - 2);
}

function move(e) {
    switch (e.keyCode) {
        case 37:
            xVelocity = -1;
            yVelocity = 0;
            break;
        case 38:
            xVelocity = 0;
            yVelocity = -1;
            break;
        case 39:
            xVelocity = 1;
            yVelocity = 0;
            break;
        case 40:
            xVelocity = 0;
            yVelocity = 1;
            break;
    }
}

function endgame() {
    clearInterval(gameTimer);
    play_songs(sound_gameover);
    score_end.innerText = score.innerText;
    game_screen.classList.add('dis-none');
    endgame_screen.classList.remove('dis-none');
}

function primary_parameters() {
    score.innerText = 0;
    tail = 3;
    xSnake = 10;
    ySnake = 10;
    xVelocity = 0;
    yVelocity = 0;
}
