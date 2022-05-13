const click_song = new Audio('music/buttonclick.mp3');

let buttons = document.querySelector('.btn');
let btn_setting = document.getElementById('btn-setting');
let btn_rule = document.getElementById('btn-rule');
let click_fullscreen = document.getElementById('click-fullscreen');
let click_game_fullscreen = document.getElementById('click-game-fullscreen');
let music_button = document.getElementById('click-music');
let click_icon_songs = document.getElementById('click-icon-songs');
let sound_state = document.getElementById('sound-state');
let music_state = document.getElementById('music-state');

let setting_modal = new bootstrap.Modal(document.getElementById('setting-modal'));
let ruller_modal = new bootstrap.Modal(document.getElementById('ruller-modal'));

buttons.addEventListener("click", () => {
    play_songs(click_song);
});
btn_setting.addEventListener("click", () => {
    if (localStorage.getItem('song') != 'off') {
        click_song.play();
    } else {
        remove_add_class('icon-song', 'fa-volume-xmark', 'fa-volume-low');
        if (localStorage.getItem('language') == 'eng') {
            sound_state.innerHTML = "off";
        } else {
            sound_state.innerHTML = "выкл.";
        }
    }
    if (localStorage.getItem('music') == 'off') {
        remove_add_class('icon-music', 'fa-volume-xmark', 'fa-volume-low');
        if (localStorage.getItem('language') == 'eng') {
            music_state.innerHTML = "off";
        } else {
            music_state.innerHTML = "выкл.";
        }
    }
    setting_modal.show();
});
btn_rule.addEventListener("click", () => {
    play_songs(click_song);
    ruller_modal.show();
});

click_fullscreen.addEventListener("click", fullscreen);
click_game_fullscreen.addEventListener("click", fullscreen);

music_button.addEventListener("click", () => {
    play_songs(click_song);
    if (localStorage.getItem('music') == 'off') {
        localStorage.removeItem('music');
        remove_add_class('icon-music', 'fa-volume-low', 'fa-volume-xmark');
        if (localStorage.getItem('language') == 'eng') {
            music_state.innerHTML = "on";
        } else {
            music_state.innerHTML = "вкл.";
        }
    } else {
        localStorage.setItem('music', 'off');
        remove_add_class('icon-music', 'fa-volume-xmark', 'fa-volume-low');
        if (localStorage.getItem('language') == 'eng') {
            music_state.innerHTML = "off";
        } else {
            music_state.innerHTML = "выкл.";
        }
    }
});

click_icon_songs.addEventListener("click", () => {
    if (localStorage.getItem('song') == 'off') {
        localStorage.removeItem('song');
        remove_add_class('icon-song', 'fa-volume-low', 'fa-volume-xmark');
        if (localStorage.getItem('language') == 'eng') {
            sound_state.innerHTML = "on";
        } else {
            sound_state.innerHTML = "вкл.";
        }
    } else {
        click_song.play();
        localStorage.setItem('song', 'off');
        remove_add_class('icon-song', 'fa-volume-xmark', 'fa-volume-low');
        if (localStorage.getItem('language') == 'eng') {
            sound_state.innerHTML = "off";
        } else {
            sound_state.innerHTML = "выкл.";
        }
    }
});

function fullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        play_songs(click_song);
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            play_songs(click_song);
        }
    }
}

function remove_add_class(element, class_add, class_remove) {
    document.getElementById(element).classList.remove(class_remove);
    document.getElementById(element).classList.add(class_add);
}

function play_songs(songs) {
    if (localStorage.getItem('song') != 'off') {
        songs.play();
    }
}
