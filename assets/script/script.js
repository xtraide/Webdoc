document.getElementById('mute').addEventListener('click', switchMute);

function switchMute() {
    if (localStorage.getItem("switchPlay") != null) {

        if (localStorage.getItem("switchPlay") == 0) {
            document.getElementById('mute_img').classList.toggle('none');
            document.getElementById('song_img').classList.toggle('none');
            localStorage.setItem("switchPlay", 1)
        }
        else {
            document.getElementById('song_img').classList.toggle('none');
            document.getElementById('mute_img').classList.toggle('none');
            localStorage.setItem("switchPlay", 0);
        }
    } else {
        document.getElementById('song_img').classList.toggle('none');
        localStorage.setItem("switchPlay", 0);
    }

}

