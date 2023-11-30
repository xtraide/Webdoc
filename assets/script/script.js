document.getElementById('mute').addEventListener('click', function () {
    switchPlay_Mute("img_container");
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



function switchNav() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementsByTagName('nav')[0].classList.add('fixedNav');
        document.getElementsByTagName('nav')[0].classList.remove('basicNav');
    } else {
        document.getElementsByTagName('nav')[0].classList.remove('fixedNav');
        document.getElementsByTagName('nav')[0].classList.add('basicNav');
    }
}
function fadout() {

    $("#loader").fadeOut(1500);
    document.body.style.overflow = "auto";
}

let time
$(document).ready(function () {
    document.body.style.overflow = "hidden";
    time = setTimeout(fadout, 4500);//code, temps de video
});

window.onscroll = function () { switchNav(); };


const fadeUpElements = document.querySelectorAll(".fade-up-element");

function checkFadeUpElements() {
    fadeUpElements.forEach((element, index) => {
        const elementRect = element.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        if (elementRect.top < screenHeight) {
            document.getElementById('navUl').getElementsByTagName('a')[index].style.color = "#ebedeb";
            setTimeout(() => {
                element.classList.add("fade-up-visible");
            }, index * 30);
        } else {
            document.getElementById('navUl').getElementsByTagName('a')[index].style.color = "#878787";
            element.classList.remove("fade-up-visible");
        }
    });
}

window.addEventListener("scroll", checkFadeUpElements);

window.addEventListener("load", checkFadeUpElements);



/* code du bg */

document.addEventListener('DOMContentLoaded', function () {
    const range = document.getElementById('mute');
    const input = document.getElementById('input_container');

    range.addEventListener("mouseover", () => {
        input.classList.remove("none");
    });

    range.addEventListener("mouseout", () => {
        input.classList.add("none");
    });
});