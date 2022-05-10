let btn_start_game = document.getElementById('btn-start-game');
let start_screen = document.querySelector('.block-start');
let game_screen = document.querySelector('.block-game');
let endgame_screen = document.querySelector('.block-endgame');
let click_repeat = document.getElementById('repeat-game');
let click_menu = document.getElementById('click-menu');
let score_end = document.getElementById('score-end');
let sound_eat_food = new Audio('music/soundone.mp3');
let sound_gameover = new Audio('music/hitsound.mp3');
let music_one = new Audio('music/Hydrogen.mp3');
let click_clack_song = new Audio('music/buttonclick.mp3');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

// Snake x and y position
let xSnake = 10;
let ySnake = 10;

// grid size and tile count
let gs = 30;
let tc = 20;

// Apple x and y position 15 15
let xApple = Math.floor(Math.random()*tc);;
let yApple = Math.floor(Math.random()*tc);

// x and y velocity
let xVelocity = 0;
let yVelocity = 0;

let trail = []; // list of tail elements
let tail = 3; // tail size


let score = document.getElementById("score-block");

let color_cell = ['red', 'orange', '#48C0FE', 'yellow', '#AF2FB1'];
let color_rand = Math.floor(Math.random() * color_cell.length);

/* code variant 3 */
btn_start_game.addEventListener("click", function() {
    start_screen.classList.add('dis-none');
    game_screen.classList.remove('dis-none');
    document.addEventListener("keydown", move);
    gameTimer = setInterval(game, 90); // скорость игры
});

click_menu.addEventListener("click", function() {
    if (localStorage.getItem('song') != 'off') {
        click_clack_song.play();
    }
    if (localStorage.getItem('music') != 'off') {
        music_one.pause();
        music_one.currentTime = 0;
    }
    score.innerText = 0;
    tail = 3;
    clearInterval(gameTimer);
    // позиция игрока
    xSnake = 10;
    ySnake = 10;

    // направление движения
    xVelocity = 0;
    yVelocity = 0;
    game_screen.classList.add('dis-none');
    start_screen.classList.remove('dis-none');
});

click_repeat.addEventListener("click", function() {
    if (localStorage.getItem('song') != 'off') {
        click_clack_song.play();
    }
    score.innerText = 0;
    tail = 3;
    clearInterval(gameTimer);
    // позиция игрока
    xSnake = 10;
    ySnake = 10;

    // направление движения
    xVelocity = 0;
    yVelocity = 0;

    document.addEventListener("keydown", move);
    gameTimer = setInterval(game, 90); // скорость игры
});

function game() {
    if (localStorage.getItem('music') != 'off') {
        music_one.play();
    }
    xSnake += xVelocity;
    ySnake += yVelocity;

    // редирект змейки если граница пересечена

    if (xSnake < 0) {
        xSnake = tc - 1;
    } else if (xSnake > tc - 1) {
        xSnake = 0;
    } else if (ySnake < 0) {
        ySnake = tc - 1;
    } else if (ySnake > tc - 1) {
        ySnake = 0;
    }

    // рисуем поле
    context.fillStyle = '#000000'; // 212636 422857 6E7888
    context.fillRect(0, 0, canvas.width, canvas.height);

    // сама змейка
    context.fillStyle = 'lime';
    context.shadowColor = 'lime';
    context.shadowBlur = 15;
    for(let i = 0; i < trail.length; i++){
        context.fillRect(trail[i].x*gs, trail[i].y*gs, gs - 2, gs - 2);
        /* тут был код */
        if ((trail[i].x == xSnake) && (trail[i].y == ySnake) && (tail >= 4)) {
            //tail = 3;
            //score.innerText = 0;
            if (localStorage.getItem('song') != 'off') {
                sound_gameover.play();
            }
            endgame();
        }
    }
    trail.push({x: xSnake, y: ySnake});
    while(trail.length > tail){
        trail.shift();
    }
    if ((xApple == xSnake) && (yApple==ySnake)) {
        if (localStorage.getItem('song') != 'off') {
            sound_eat_food.play();
        }
        score.innerText = +score.innerText + 1;
        tail++;
        xApple = Math.floor(Math.random()*tc);
        yApple = Math.floor(Math.random()*tc);

        color_rand = Math.floor(Math.random() * color_cell.length);
        context.fillStyle = color_cell[color_rand];
        context.shadowColor = color_cell[color_rand];
        context.shadowBlur = 15;
    }
    // Shadow
    context.fillStyle = color_cell[color_rand];
    context.shadowColor = color_cell[color_rand];
    context.shadowBlur = 15;
    context.fillRect(xApple*gs, yApple*gs, gs - 2, gs - 2);
}

function move(e) { // события передвижения
    //console.log(e.keyCode);
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

function endgame() { // конец игры
    clearInterval(gameTimer);
    if (localStorage.getItem('song') != 'off') {
        sound_gameover.play();
    }
    score_end.innerText = score.innerText;
    game_screen.classList.add('dis-none');
    endgame_screen.classList.remove('dis-none');


    //alert("Конец игры:)");
    /*
    // позиция игрока
    let playerX = 15;
    let playerY = 15;

    // направление движения
    let moveX = 0;
    let moveY = 0;*/
    //game();
}

/* code variant 1 */
/*
// Поле, на котором всё будет происходить, — тоже как бы переменная
const canvas = document.getElementById('game');
// Классическая змейка — двухмерная, сделаем такую же
const context = canvas.getContext('2d');
// Размер одной клеточки на поле — 16 пикселей
const grid = 5;
// Служебная переменная, которая отвечает за скорость змейки
let count = 0;

let audio = new Audio('music/soundone.mp3');
let gameover = new Audio('music/hitsound.mp3');
//let fonsound = new Audio('music/Hydrogen.mp3');

let schet = document.getElementById('schet');

// А вот и сама змейка
let snake = {
  // Начальные координаты
  x: 160,
  y: 160,
  // Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
  dx: grid,
  dy: 0,
  // Тащим за собой хвост, который пока пустой
  cells: [],
  // Стартовая длина змейки — 3 клеточки
  maxCells: 3
};

// А это — еда. Представим, что это красные яблоки.
let apple = {
  // Начальные координаты яблока
  x: 100,
  y: 100
};
// Делаем генератор случайных чисел в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// Игровой цикл — основной процесс, внутри которого будет всё происходить
function loop() {
  //fonsound.play();
  // Хитрая функция, которая замедляет скорость игры с 60 кадров в секунду до 15 (60/15 = 4)
  requestAnimationFrame(loop);
  // Игровой код выполнится только один раз из четырёх, в этом и суть замедления кадров, а пока переменная count меньше четырёх, код выполняться не будет
  if (++count < 5) {
    return;
  }
  // Обнуляем переменную скорости
  count = 0;
  // Очищаем игровое поле
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Двигаем змейку с нужной скоростью
  snake.x += snake.dx;
  snake.y += snake.dy;
  // Если змейка достигла края поля по горизонтали — продолжаем её движение с противоположной строны
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  // Делаем то же самое для движения по вертикали
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
  // Продолжаем двигаться в выбранном направлении. Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку
  snake.cells.unshift({ x: snake.x, y: snake.y });
  // Сразу после этого удаляем последний элемент из массива змейки, потому что она движется и постоянно освобождает клетки после себя
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  // Рисуем еду — красное яблоко
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
  // Одно движение змейки — один новый нарисованный квадратик 
  context.fillStyle = 'green';
  // Обрабатываем каждый элемент змейки
  snake.cells.forEach(function (cell, index) {
    // Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    // Если змейка добралась до яблока...
    if (cell.x === apple.x && cell.y === apple.y) {
      // увеличиваем длину змейки
      snake.maxCells++;

      // счет игры
      schet.innerText = +schet.innerText + 1;
      audio.play();
      // Рисуем новое яблочко
      // Помним, что размер холста у нас 400x400, при этом он разбит на ячейки — 25 в каждую сторону
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }
    // Проверяем, не столкнулась ли змея сама с собой
    // Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
    for (var i = index + 1; i < snake.cells.length; i++) {
      // Если такие клетки есть — начинаем игру заново
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        gameover.play();
        schet.innerText = 0;
        // Задаём стартовые параметры основным переменным
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 3;
        snake.dx = grid;
        snake.dy = 0;
        // Ставим яблочко в случайное место
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}
// Смотрим, какие нажимаются клавиши, и реагируем на них нужным образом
document.addEventListener('keydown', function (e) {
  // Дополнительно проверяем такой момент: если змейка движется, например, влево, то ещё одно нажатие влево или вправо ничего не поменяет — змейка продолжит двигаться в ту же сторону, что и раньше. Это сделано для того, чтобы не разворачивать весь массив со змейкой на лету и не усложнять код игры.
  // Стрелка влево
  // Если нажата стрелка влево, и при этом змейка никуда не движется по горизонтали…
  if (e.which === 37 && snake.dx === 0) {
    // то даём ей движение по горизонтали, влево, а вертикальное — останавливаем
    // Та же самая логика будет и в остальных кнопках
    snake.dx = -grid;
    snake.dy = 0;
  }
  // Стрелка вверх
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // Стрелка вправо
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // Стрелка вниз
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
// Запускаем игру
requestAnimationFrame(loop);
*/


/* code variant 2 */
/*
let cells = 30; // ячеек
let cellSize = 20; // размер ячейки

// позиция еды
let foodX = 25;
let foodY = 25;

// позиция игрока
let playerX = 15;
let playerY = 15;

// направление движения
let moveX = 0;
let moveY = 0;

let trail = []; // движение
let tail = 3; // хвост

let score = document.getElementById("score-block");

btn_start_game.addEventListener("click", function() {
    start_screen.classList.add('dis-none');
    game_screen.classList.remove('dis-none');
    document.addEventListener("keydown", move);
    gameTimer = setInterval(game, 60); // событие обновления игры
});

function game() {
    //score.innerText = 0;
    playerX += moveX;
    playerY += moveY;

    if (playerX < 0 || playerY < 0 || playerY > cells || playerX > cells) { // если врезаемся в сетку то конец игры
        endgame();
    }

    context.fillStyle = "#422857";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#f70505";
    context.fillRect(foodX * cellSize, foodY * cellSize, cellSize, cellSize);

    context.fillStyle = "#20700a";

    for (let i = 0; i < trail.length; i++) {
        context.fillRect(trail[i].x * 20, trail[i].y * 20, cellSize, cellSize);
    }

    trail.push({x: playerX, y: playerY});

    if (playerX == foodX && playerY == foodY) {
        tail++;
        score.innerText = +score.innerText + 1;
        foodX = Math.floor(Math.random() * cells);
        foodY = Math.floor(Math.random() * cells);
    }

    // if (playerX == trail[i].x && playerY == trail[i].y) {
       // endgame();
    // }
    while (trail.length > tail) {
        trail.shift();
    }

}

function endgame() { // конец игры
    clearInterval(gameTimer);
    alert("Конец игры:)");
    // позиция игрока
    let playerX = 15;
    let playerY = 15;

    // направление движения
    let moveX = 0;
    let moveY = 0;
    //game();
}

function move(e) { // события передвижения
    //console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            moveX = -1;
            moveY = 0;
            break;
        case 38:
            moveX = 0;
            moveY = -1;
            break;
        case 39:
            moveX = 1;
            moveY = 0;
            break;
        case 40:
            moveX = 0;
            moveY = 1;
            break;
    }
}
*/