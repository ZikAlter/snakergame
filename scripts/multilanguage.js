let dclicksong = new Audio('music/buttonclick.mp3');
let engbutton = document.getElementById('eng-lang');
let rusbutton = document.getElementById('rus-lang');
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
    "youscore": "Your score:"
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
    "youscore": "Ваш счет:"
};

let eng_json = JSON.stringify(english);
let eng_parse = JSON.parse(eng_json);
engbutton.addEventListener("click", function() {
    titleHTML.innerHTML = 'Game "Snake"';
    for(let i of document.querySelectorAll('[data-words]')) {
        let field = i.getAttribute('data-words');
        i.innerText = eng_parse[field];
    }
    if (localStorage.getItem('song') != 'off') {
        dclicksong.play();
    } else {
        document.getElementById('sound-state').innerHTML = "off";
    }
    if (localStorage.getItem('music') == 'off') {
        document.getElementById('music-state').innerHTML = "off";
    }
    localStorage.setItem('language', 'eng');
});

let rus_json = JSON.stringify(russian);
let rus_parse = JSON.parse(rus_json);
rusbutton.addEventListener("click", function() {
    titleHTML.innerHTML = 'Игра "Змейка"';
    for(let i of document.querySelectorAll('[data-words]')) {
        let field = i.getAttribute('data-words');
        i.innerText = rus_parse[field];
    }
    if (localStorage.getItem('song') != 'off') {
        dclicksong.play();
    } else {
        document.getElementById('sound-state').innerHTML = "выкл.";
    }
    if (localStorage.getItem('music') == 'off') {
        document.getElementById('music-state').innerHTML = "выкл.";
    }
    let checkstorage = localStorage.getItem('language');
    if (checkstorage == 'eng') {
        localStorage.removeItem('language');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let langstorage = localStorage.getItem('language');
    if (langstorage == 'eng') {
        titleHTML.innerHTML = 'Game "Snake"';
        for(let i of document.querySelectorAll('[data-words]')) {
            let field = i.getAttribute('data-words');
            i.innerText = eng_parse[field];
        }
    }
});


