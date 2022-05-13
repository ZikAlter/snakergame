let eng_button = document.getElementById('eng-lang');
let rus_button = document.getElementById('rus-lang');
let titleHTML = document.querySelector('title');

let english = {
    "namegame": "Game Snake",
    "btnstart": "Start playing",
    "btnsetting": "Setting",
    "btnrules": "Rules",
    "titlesetting": "Setting game",
    "music": "Music",
    "sounds": "Sounds",
    "checkon": "on",
    "checkoff": "off",
    "fullscreen": "Full screen",
    "lang": "Languages",
    "btnclose": "Close",
    "rulegame": "Rules game",
    "score": "Score:",
    "menu": "Menu",
    "repeat": "Repeat",
    "gameover": "Game over",
    "youscore": "Your score:",
    "rulepage1": "The player controls a long, slender, snake-like creature that crawls across the playing field, gathering food (or other items) while avoiding its own tail. Each time the snake eats a piece of food, it becomes longer, which gradually makes the game more difficult.",
    "rulepage2": "The main goal of the game is to collect as much food as possible and score points. Loss in the game is counted when colliding with one's own tail.",
    "rulepage3": "Use the up, down, right, left arrow keys to navigate."
};
let russian = {
    "namegame": "Игра Змейка",
    "btnstart": "Начать игру",
    "btnsetting": "Настройки",
    "btnrules": "Правила",
    "titlesetting": "Настройки игры",
    "music": "Музыка",
    "sounds": "Звуки",
    "checkon": "вкл.",
    "checkoff": "выкл.",
    "fullscreen": "Полноэкранный режим",
    "lang": "Языки",
    "btnclose": "Закрыть",
    "rulegame": "Правила игры",
    "score": "Счет:",
    "menu": "Меню",
    "repeat": "Повторить",
    "gameover": "Конец игры",
    "youscore": "Ваш счет:",
    "rulepage1": "Игрок управляет длинным, тонким существом, напоминающим змею, которое ползает по игровому полю, собирая еду (или другие предметы), при этом избегая столкновения с собственным хвостом. Каждый раз, когда змея съедает кусок еды, она становится длиннее, что постепенно усложняет игру.",
    "rulepage2": "Основная цель игры: собрать как можно больше еды и набрать баллы. Проигрыш засчитывается при столкновении с собственным хвостом.",
    "rulepage3": "Для управления используйте клавиши стрелки вверх, вниз, вправо, влево."
};

let eng_json = JSON.stringify(english);
let eng_parse = JSON.parse(eng_json);
let rus_json = JSON.stringify(russian);
let rus_parse = JSON.parse(rus_json);

eng_button.addEventListener("click", function() {
    translate_txt ('Game "Snake"', eng_parse);
    if (localStorage.getItem('song') != 'off') {
        click_song.play();
    } else {
        document.getElementById('sound-state').innerHTML = "off";
    }
    if (localStorage.getItem('music') == 'off') {
        document.getElementById('music-state').innerHTML = "off";
    }
    localStorage.setItem('language', 'eng');
});

rus_button.addEventListener("click", function() {
    translate_txt ('Игра "Змейка"', rus_parse);
    if (localStorage.getItem('song') != 'off') {
        click_song.play();
    } else {
        document.getElementById('sound-state').innerHTML = "выкл.";
    }
    if (localStorage.getItem('music') == 'off') {
        document.getElementById('music-state').innerHTML = "выкл.";
    }
    if (localStorage.getItem('language') == 'eng') {
        localStorage.removeItem('language');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('language') == 'eng') {
        translate_txt ('Game "Snake"', eng_parse);
    }
});

function translate_txt (inner_html, elem_parse) {
    titleHTML.innerHTML = inner_html;
    for(let i of document.querySelectorAll('[data-words]')) {
        let field = i.getAttribute('data-words');
        i.innerText = elem_parse[field];
    }
}


