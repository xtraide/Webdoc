document.getElementById('mute').addEventListener('click', function () {
    switchPlay_Mute("mute");
});
document.getElementById('play').addEventListener('click', function () {
    switchPlay_Mute("play");
});

function switchPlay_Mute(local) {
    let id = document.getElementById(local);
    if (localStorage.getItem(local) != null) {

        if (localStorage.getItem(local) == 0) {

            localStorage.setItem(local, 1)
        }
        else {
            localStorage.setItem(local, 0);
        }
    } else {
        localStorage.setItem(local, 0);
    }

    id.children[0].classList.toggle('none');
    id.children[1].classList.toggle('none');
}


function previous1() {
    const widthSlider = document.querySelector(".slider2").offsetWidth;
    document.querySelector(".slider_content2").scrollLeft -= widthSlider;
}

function next1() {
    const widthSlider = document.querySelector(".slider2").offsetWidth;
    const sliderContent = document.querySelector(".slider_content2");
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll(".slider_content_item2");

    if (scrollLeft == widthSlider * (itemsSlider.length - 1)) {
        sliderContent.scrollLeft = 0;
    }
}