let seconds = 0;
let tens = 0;
let mins = 0;

let getSeconds = document.querySelector('.secs'); // Fixed selector
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');

let btnstart = document.querySelector('.btn-start');
let btnstop = document.querySelector('.btn-stop');
let btnreset = document.querySelector('.btn-reset');

let interval;

btnstart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnstop.addEventListener('click', () => {
    clearInterval(interval);
});

btnreset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    updateDisplay();
});

function startTimer() {
    tens++;
    if (tens < 10) {
        getTens.innerHTML = '0' + tens;
    } else {
        getTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        tens = 0;
        getTens.innerHTML = '00';
    }

    if (seconds > 59) {
        mins++;
        getMins.innerHTML = mins < 10 ? '0' + mins : mins;
        seconds = 0;
        getSeconds.innerHTML = '00';
    }
}

function updateDisplay() {
    getMins.innerHTML = "00";
    getSeconds.innerHTML = "00";
    getTens.innerHTML = "00";
}
