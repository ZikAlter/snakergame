/*let fonsound = new Audio('music/Hydrogen.mp3');
fonsound.play();*/

let clicksong = new Audio('music/buttonclick.mp3');
let buttons = document.querySelector('.btn');

let btn_setting = document.getElementById('btn-setting');
let setting_modal = new bootstrap.Modal(document.getElementById('setting-modal'));

let btn_rule = document.getElementById('btn-rule');
let ruller_modal = new bootstrap.Modal(document.getElementById('ruller-modal'));

let fullscreen = document.getElementById('click-fullscreen');

buttons.addEventListener("click", function() {
    clicksong.play();
});
btn_setting.addEventListener("click", function() {
    clicksong.play();
    setting_modal.show();
});
btn_rule.addEventListener("click", function() {
    clicksong.play();
    ruller_modal.show();
});

fullscreen.addEventListener("click", function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        clicksong.play();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            clicksong.play();
        }
    }
});
