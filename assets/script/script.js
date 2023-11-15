document.getElementById('mute').addEventListener('click', function () {
    switchPlay_Mute("mute");
});
document.getElementById('play').addEventListener('click', function () {
    switchPlay_Mute("play");
    pausePlay();
});
document.getElementById('container-nav').addEventListener("load", function () {

    var myAudio = getAudioPlaying();
    myAudio.volume = 0.2;
    pausePlay();
})
function switchPlay_Mute(local) {
    let id = document.getElementById(local);
    if (localStorage.getItem(local) != null) {

        if (localStorage.getItem(local) == 0) {
            id.children[0].classList.toggle('none');

            id.children[1].classList.toggle('none');
            localStorage.setItem(local, 1)
        }
        else {
            id.children[0].classList.toggle('none');

            id.children[1].classList.toggle('none');
            localStorage.setItem(local, 0);
        }
    } else {
        localStorage.setItem(local, 0);
    }
}


function previous1() {
    const widthSlider = document.querySelector(".slider2").offsetWidth;
    const sliderContent = document.querySelector(".slider_content2");
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll(".slider_content_item2");

    if (scrollLeft === 0) {
        sliderContent.scrollLeft = widthSlider * (itemsSlider.length - 1);
    } else {
        sliderContent.scrollLeft -= widthSlider;
    }
}

function next1() {
    const widthSlider = document.querySelector(".slider2").offsetWidth;
    const sliderContent = document.querySelector(".slider_content2");
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll(".slider_content_item2");

    if (scrollLeft + widthSlider >= widthSlider * (itemsSlider.length - 1)) {
        sliderContent.scrollLeft = 0;
    } else {
        sliderContent.scrollLeft += widthSlider;
    }
}

function getAudioPlaying() {
    myAudio = document.getElementById('playable');

    return myAudio;
}

function pausePlay() {
    var myAudio = getAudioPlaying();
    if (isPlaying(myAudio)) {

        myAudio.pause();
    } else {

        myAudio.play();
    }

}
function isPlaying(myAudio) {

    if (myAudio.duration > 0 && !myAudio.paused) {

        return true;
    } else {

        return false;
    }

}
function mutedNot() {
    var myAudio = getAudioPlaying();
    if (isMuted(myAudio)) {

        document.getElementById("myAudio").volume = 0.2;
    } else {

        myAudio.play();
    }

}

function isMuted() {
    if (myAudio.muted) {

        return true;
    } else {

        return false;
    }
}



function scrollCircle() {
    if (document.documentElement.scrollTop > 50) {
        let play_mute = document.getElementsByTagName();
        play_mute.style.position = "fixed";
        play_mute.style.backgroundColor = "none";
        play_mute.style.zIndex = "none";



    }
}
function fadout() {

    $("#loader").fadeOut(1500);
}
let time
$(document).ready(function () {

    time = setTimeout(fadout, 3000);//code, temps de video
});

window.onscroll = function () { scrollCircle() };






