import {
    button, minute, second, settings, ring, interval, minutes, seconds, tempMinutes, tempSeconds, shouldRun, audio, sound
} from './index.js'



let playSound = () => {
    sound.src = 'beep.mp3'
    sound.play()
};

let returnData = input => {
    return input >= 10 ? input : `0${input}`
};

let setTime = (minutes, seconds) => {
    minutes = minutes ? parseInt(minutes) : "0";
    seconds = seconds ? parseInt(seconds) : "0";
    minute.value = returnData(minutes.toString());
    second.value = returnData(seconds.toString());
};


let setMinuteAndSecond = shouldDisable => {
    minute.disabled = shouldDisable;
    second.disabled = shouldDisable;
};

let sendAlert = message => {
    alert(message);
    button.innerText = "START"
    shouldRun = false;
};



let start = () => {
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


let pause = () => {
    clearInterval(interval);
    settings.disabled = false;
};

let isNumeric = str => {
    str = str.toString();
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
};

let validateData = (minutes, seconds) => {
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

let onComplete = () => {
    ring.classList.add("ending", "circle");
    audio = setInterval(() => {
        playSound()
    }, 500);
    pause()
    document.getElementById("settings").disabled = false;
    button.innerText = "STOP"
};



export { start, setTime};