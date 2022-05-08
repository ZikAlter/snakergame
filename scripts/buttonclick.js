/*document.addEventListener('DOMContentLoaded', function () {
    let fonsound = new Audio('music/Hydrogen.mp3');
    fonsound.play();
});*/

let clicksong = new Audio('music/buttonclick.mp3');
let buttons = document.querySelector('.btn');

let btn_setting = document.getElementById('btn-setting');
let setting_modal = new bootstrap.Modal(document.getElementById('setting-modal'));

let btn_rule = document.getElementById('btn-rule');
let ruller_modal = new bootstrap.Modal(document.getElementById('ruller-modal'));

let fullscreen = document.getElementById('click-fullscreen');
let musicbutton = document.getElementById('click-music');

let click_icon_songs = document.getElementById('click-icon-songs');

let sound_state = document.getElementById('sound-state');
let music_state = document.getElementById('music-state');

buttons.addEventListener("click", function() {
    if (localStorage.getItem('song') != 'off') {
        clicksong.play();
    }
});
btn_setting.addEventListener("click", function() {
    if (localStorage.getItem('song') != 'off') {
        clicksong.play();
    } else {
        document.getElementById('icon-song').classList.remove('fa-volume-low');
        document.getElementById('icon-song').classList.add('fa-volume-xmark');
        if (localStorage.getItem('language') == 'eng') {
            sound_state.innerHTML = "off";
        } else {
            sound_state.innerHTML = "выкл.";
        }
    }
    if (localStorage.getItem('music') == 'off') {
        document.getElementById('icon-music').classList.remove('fa-volume-low');
        document.getElementById('icon-music').classList.add('fa-volume-xmark');
        if (localStorage.getItem('language') == 'eng') {
            music_state.innerHTML = "off";
        } else {
            music_state.innerHTML = "выкл.";
        }
    }
    setting_modal.show();
});
btn_rule.addEventListener("click", function() {
    if (localStorage.getItem('song') != 'off') {
        clicksong.play();
    }
    ruller_modal.show();
});

fullscreen.addEventListener("click", function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        if (localStorage.getItem('song') != 'off') {
            clicksong.play();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            if (localStorage.getItem('song') != 'off') {
                clicksong.play();
            }
        }
    }
});

musicbutton.addEventListener("click", function() {
    if (localStorage.getItem('song') != 'off') {
        clicksong.play();
    }
    if (localStorage.getItem('music') == 'off') {
        localStorage.removeItem('music');
        document.getElementById('icon-music').classList.remove('fa-volume-xmark');
        document.getElementById('icon-music').classList.add('fa-volume-low');
        if (localStorage.getItem('language') == 'eng') {
            music_state.innerHTML = "on";
        } else {
            music_state.innerHTML = "вкл.";
        }
    } else {
        localStorage.setItem('music', 'off');
        document.getElementById('icon-music').classList.remove('fa-volume-low');
        document.getElementById('icon-music').classList.add('fa-volume-xmark');
        if (localStorage.getItem('language') == 'eng') {
            music_state.innerHTML = "off";
        } else {
            music_state.innerHTML = "выкл.";
        }
    }
});

click_icon_songs.addEventListener("click", function() {
    if (localStorage.getItem('song') == 'off') {
        localStorage.removeItem('song');
        document.getElementById('icon-song').classList.remove('fa-volume-xmark');
        document.getElementById('icon-song').classList.add('fa-volume-low');
        if (localStorage.getItem('language') == 'eng') {
            sound_state.innerHTML = "on";
        } else {
            sound_state.innerHTML = "вкл.";
        }
    } else {
        clicksong.play();
        localStorage.setItem('song', 'off');
        document.getElementById('icon-song').classList.remove('fa-volume-low');
        document.getElementById('icon-song').classList.add('fa-volume-xmark');
        if (localStorage.getItem('language') == 'eng') {
            sound_state.innerHTML = "off";
        } else {
            sound_state.innerHTML = "выкл.";
        }
    }
});
