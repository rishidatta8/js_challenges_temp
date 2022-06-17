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

const sound = new Audio()

const playSound = () => {
    sound.src = 'beep.mp3'
    sound.play()
};

const returnData = input => {
    return input >= 10 ? input : `0${input}`
};

const setTime = (minutes, seconds) => {
    minutes = minutes ? parseInt(minutes) : "0";
    seconds = seconds ? parseInt(seconds) : "0";
    minute.value = returnData(minutes.toString());
    second.value = returnData(seconds.toString());
};


setTime(minutes, seconds)


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

const setMinuteAndSecond = shouldDisable => {
    minute.disabled = shouldDisable;
    second.disabled = shouldDisable;
};

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

const sendAlert = message => {
    alert(message);
    button.innerText = "START"
    shouldRun = false;
};

const start = () => {
    ring.classList.remove("ending", "circle");
    settings.disabled = true;
    shouldRun = true;

    validateData(minutes, seconds);

    if (!shouldRun) {
        return;
    }

    setTime(minutes, seconds);
    setMinuteAndSecond(true)

    interval = setInterval(() => {

        if (seconds != 0) {
            seconds--;
        } else {
            minutes--;
            seconds = 59;
        }

        setTime(minutes, seconds);

        if (seconds == 0 && minutes == 0) {
            onComplete();
        }
    }, 1000);
};

const pause = () => {
    clearInterval(interval);
    settings.disabled = false;
};

const isNumeric = str => {
    str = str.toString();
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
};

const validateData = (minutes, seconds) => {
    if (!(isNumeric(minutes) && isNumeric(seconds))) {
        sendAlert('Please enter numeric values');
    }

    if (minutes == 0 && seconds == 0) {
        sendAlert('Both values cannot be 0')
    }

    if (minutes < 0 || seconds < 0) {
        sendAlert('Values cannot be negative')
    }

    if (minutes > 60 || seconds > 60) {
        sendAlert('Values cannot be greater than 60');
    }
};

const onComplete = () => {
    ring.classList.add("ending", "circle");
    audio = setInterval(() => {
        playSound()
    }, 500);
    pause()
    document.getElementById("settings").disabled = false;
    button.innerText = "STOP"
};