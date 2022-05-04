const canvas = document.getElementById("game"); // Поле, на котором всё будет происходить, — тоже как бы переменная
const context = canvas.getContext("2d"); // двумерная
let score = 0; // счет
let tileSize = 20; // размер клетки
let tileCount = world.width / tileSize;
let food = {
    x: 15,
    y: 15,
};
let snake = [];
let snakeHead = {
    x: 10,
    y: 10,
};
let snakeTailCount = 1;