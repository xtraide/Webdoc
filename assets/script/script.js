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

