let dclicksong = new Audio('music/buttonclick.mp3');
let engbutton = document.getElementById('eng-lang');
let rusbutton = document.getElementById('rus-lang');
let titleHTML = document.querySelector('title');
let english = {
    "namegame": "Game Snake",
    "btnstart": "Start game",
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
    "rulegame": "Rules game"
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
    "rulegame": "Правила игры"
};

let eng_json = JSON.stringify(english);
let eng_parse = JSON.parse(eng_json);
engbutton.addEventListener("click", function() {
    dclicksong.play();
    titleHTML.innerHTML = 'Game "Snake"';
    for(let i of document.querySelectorAll('[data-words]')) {
        let field = i.getAttribute('data-words');
        i.innerText = eng_parse[field];
    }
    localStorage.setItem('language', 'eng');
    console.log(localStorage.getItem('language'));
});

let rus_json = JSON.stringify(russian);
let rus_parse = JSON.parse(rus_json);
rusbutton.addEventListener("click", function() {
    dclicksong.play();
    titleHTML.innerHTML = 'Игра "Змейка"';
    for(let i of document.querySelectorAll('[data-words]')) {
        let field = i.getAttribute('data-words');
        i.innerText = rus_parse[field];
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


