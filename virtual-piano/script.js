const pianokey = document.querySelectorAll('.piano-key');
const piano = document.getElementById("piano");

const startSound = (event) => {
    event.target.classList.add('piano-key-active');
    let key = event.target;
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
}
const stopSound = (event) => {
    event.target.classList.remove('piano-key-active');
}

const startOver = (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add('piano-key-active');
        let key = event.target;
        let note = document.getElementById(key.dataset.note);
        note.currentTime = 0;
        note.play();
    }
    pianokey.forEach((elem) => {
        elem.addEventListener('mouseover', startSound);
        elem.addEventListener('mouseout', stopSound);
    });
}

const stopOver = () => {
    pianokey.forEach((elem) => {
        elem.classList.remove('piano-key-active');
        elem.removeEventListener('mouseover', startSound);
        elem.removeEventListener('mouseout', stopSound);
    });
}

piano.addEventListener('mousedown', startOver,);
piano.addEventListener('mouseup', stopOver,);

window.addEventListener('keydown', (event) => {
    let code = event.code;
    let key = code.replace('Key', '');
    let note = document.querySelector(`[data-letter="${key}"]`);
    note.classList.add('piano-key-active');
    let audio = document.getElementById(note.dataset.note);
    audio.currentTime = 0;
    audio.play();
    
})

window.addEventListener('keyup', (event) => {
    let code = event.code;
    let key = code.replace('Key', '');
    let note = document.querySelector(`[data-letter="${key}"]`);
    note.classList.remove('piano-key-active');
    
})

const not = document.getElementById("not");
const lett = document.getElementById("lett");

function bthnotes() {
    lett.classList.remove('btn-active');
    not.classList.add('btn-active');
    pianokey.forEach((elem) => {
        elem.classList.remove('piano-key-letter');
    });
}
function bthLetters() {
    lett.classList.add('btn-active');
    not.classList.remove('btn-active');
    pianokey.forEach((elem) => {
        elem.classList.add('piano-key-letter');
    });
}

not.addEventListener('click', bthnotes);
lett.addEventListener('click', bthLetters);


const fulls = document.querySelector(".fullscreen");

function fullScreen(){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {document.exitFullscreen();
    }
}
fulls.addEventListener('click', fullScreen);