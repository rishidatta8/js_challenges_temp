// var button = document.getElementById("start/stop");
// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");
// var settings = document.getElementById("settings");
// var ring = document.getElementById("ring");



// button.onclick = () => {
//     button.innerText === "START" ? start() : pause();
//     button.innerText === "START" ? button.innerText = "STOP" : button.innerText = "START";
// }

// settings.onclick = () => {
//     minute = prompt("Enter Minutes:");
//     second = prompt("Enter Seconds:");
//     setTime(minute, second);

// }

// function setTime(minute, second) {
//     minutes.setAttribute("value", returnData(minute).toString());
//     seconds.setAttribute("value", returnData(second).toString());
// }


// // let hour = 0;
// let minute = 15;
// let second = 0;
// let millisecond = 0;


// let cron;

// // document.form_main.pause.onclick = () => pause();
// // document.form_main.reset.onclick = () => reset();

// function start() {
//     ring.classList.remove("ending", "circle");
//     pause();
//     cron = setInterval(() => { timer(); }, 10);
// }

// function pause() {
//     clearInterval(cron);
// }

// function reset() {
//     // hour = 0;
//     minute = 0;
//     second = 0;
//     millisecond = 0;
//     // document.getElementById('hour').innerText = '00';
//     document.getElementById('minute').innerText = '00';
//     document.getElementById('second').innerText = '00';
//     // document.getElementById('millisecond').innerText = '000';
// }

// function timer() {
//     if (minute == 0 && second == 0) {
// button.innerText = "START";
// ring.classList.add("ending", "circle");
// setTimeout(() => {
//     alert("Timer done");
// }, 10);
// pause();
//     }
//     if ((millisecond += 10) == 1000) {
//         millisecond = 0;
//         second--;
//     }
//     // if (second == 60) {
//     //     second = 0;
//     //     minute--;
//     // }
//     if(second == 0 && minute != 0) {
//         // second = 0;
//         // minute--;
//     }
//     // if (minute == 60) {
//     //     minute = 0;
//     //     hour--;
//     // }
//     // document.getElementById('hour').innerText = returnData(hour);
//     setTime(minute, second);


//     // document.getElementById('millisecond').innerText = returnData(millisecond);
// }

// function returnData(input) {
//     return input >= 10 ? input : `0${input}`
// }



let button = document.getElementById("start/stop");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let settings = document.getElementById("settings");
let ring = document.getElementById("ring");
let interval;
let minutes = 0;
let seconds = 3;
let tempMinutes = 15;
let tempSeconds = 0;

setTime(minutes, seconds);


function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}

button.onclick = () => {
    // if(button.innerText == "STOP"){
    //     pause();
    // }

    button.innerText == "START" ? button.innerText = "STOP" : button.innerText = "START";
    button.innerText == "STOP" ? start() : pause();
    
    // }else{
    //     button.innerText = "STOP";
    //     start();
    // }
}

settings.onclick = () => {
    button.innerText = "START";
    minute.disabled = false;
    second.disabled = false;

}

minute.onchange = (e) => {
    minutes = e.target.value;
}

second.onchange = (e) => {
    seconds = e.target.value;
}

function start() {
    settings.disabled = true;
    if (!(isNumeric(minutes) && isNumeric(seconds))) {
        alert('Please enter numeric values');
        button.innerText = "START"
        return
    }

    if(minutes == 0 && seconds == 0) {
        alert('Both values cannot be 0')
        button.innerText = "START"
        return
    }

    if(minutes < 0 || seconds < 0) {
        alert('Values cannot be negative')
        button.innerText = "START"
        return
    }

    if(minutes > 60 || seconds > 60) {
        alert('Values cannot be greater than 60');
        button.innerText = "START"
        return
    }

    ring.classList.remove("ending", "circle");
    setTime(minutes, seconds);
    minute.disabled = true;
    second.disabled = true;

    interval = setInterval(() => {

        if (seconds != 0) {
            seconds--;
        } else {
            minutes--;
            seconds = 59;
        }

        setTime(minutes, seconds);

        if (seconds == 0 && minutes == 0) {
            button.innerText = "START";
            ring.classList.add("ending", "circle");
            clearInterval(interval);
            beep();
            document.getElementById("settings").disabled = false;
        }


    }, 1000);
}

function pause() {
    clearInterval(interval);
    //button.innerText = "START"
    settings.disabled = false;
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

function setTime(minutes, seconds) {
    minutes = minutes ? parseInt(minutes) : "0";
    seconds = seconds ? parseInt(seconds) : "0";
    minute.value = returnData(minutes.toString());
    second.value = returnData(seconds.toString());
}


function isNumeric(str) {
    str = str.toString();
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}