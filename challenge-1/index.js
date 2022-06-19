import { start, setTime} from './utilities.js'

let button = document.getElementById("start/stop");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let settings = document.getElementById("settings");
let ring = document.getElementById("ring");
let interval;
let minutes = 15;
let seconds = 0;
let tempMinutes = minutes;
let tempSeconds = seconds;
let shouldRun = true;
let audio;

settings.onclick = () => {
    button.innerText = "START";
    setMinuteAndSecond(false);
    clearInterval(audio);
}

minute.onchange = e => {
    minutes = e.target.value;
    seconds = second.value;
    tempMinutes = minutes;
    tempSeconds = seconds;
}

second.onchange = e => {
    seconds = e.target.value;
    minutes = minute.value;
    tempMinutes = minutes;
    tempSeconds = seconds;
}


button.onclick = () => {
    if (button.innerText == "STOP" && minutes == 0 && seconds == 0) {
        minutes = tempMinutes
        seconds = tempSeconds
        setTime(minutes, seconds);
        ring.classList.remove("ending", "circle");
    }
    if (button.innerText == "START") {
        button.innerText = "STOP"
        start();
    } else {
        pause()
        clearInterval(audio);
        button.innerText = "START"
    }
}

const sound = new Audio()

setTime(minutes, seconds)

start()

export { button, minute, second, settings, ring, interval, minutes, seconds, tempMinutes, tempSeconds, shouldRun, audio, sound }