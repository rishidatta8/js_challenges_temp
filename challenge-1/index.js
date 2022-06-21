const button = document.getElementById('start/stop');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const settings = document.getElementById('settings');
const ring = document.getElementById('ring');
let interval;
let minutes = 15;
let seconds = 0;
let tempMinutes = minutes;
let tempSeconds = seconds;
let shouldRun = true;
let audio;

const sendAlert = (message) => {
  // eslint-disable-next-line no-alert
  alert(message);
  button.innerText = 'START';
  shouldRun = false;
};

const isNumeric = (s) => {
  const str = s.toString();
  return (
    !typeof str !== 'string' &&
    !Number.isNaN(str) &&
    !Number.isNaN(parseFloat(str))
  );
};

const validateData = () => {
  if (!(isNumeric(minutes) && isNumeric(seconds))) {
    sendAlert('Please enter numeric values');
  }

  if (parseInt(minutes, 10) === 0 && parseInt(seconds, 10) === 0) {
    sendAlert('Both values cannot be 0');
  }

  if (minutes < 0 || seconds < 0) {
    sendAlert('Values cannot be negative');
  }

  if (minutes > 60 || seconds > 60) {
    sendAlert('Values cannot be greater than 60');
  }
};

const sound = new Audio();

const playSound = () => {
  sound.src = 'beep.mp3';
  sound.play();
};

const pause = () => {
  clearInterval(interval);
  settings.disabled = false;
};

const onComplete = () => {
  ring.classList.add('ending', 'circle');
  audio = setInterval(() => {
    playSound();
  }, 500);
  pause();
  document.getElementById('settings').disabled = false;
  button.innerText = 'STOP';
};

const returnData = (input) => (input >= 10 ? input : `0${input}`);

const setTime = () => {
  minutes = minutes ? parseInt(minutes, 10) : '0';
  seconds = seconds ? parseInt(seconds, 10) : '0';
  minute.value = returnData(minutes.toString());
  second.value = returnData(seconds.toString());
};

const setMinuteAndSecond = (shouldDisable) => {
  minute.disabled = shouldDisable;
  second.disabled = shouldDisable;
};

const start = () => {
  ring.classList.remove('ending', 'circle');
  settings.disabled = true;
  shouldRun = true;

  validateData(minutes, seconds);

  if (!shouldRun) {
    return;
  }

  setTime(minutes, seconds);
  setMinuteAndSecond(true);

  interval = setInterval(() => {
    if (parseInt(seconds, 10) !== 0) {
      seconds -= 1;
    } else {
      minutes -= 1;
      seconds = 59;
    }

    setTime(minutes, seconds);

    if (parseInt(minutes, 10) === 0 && parseInt(seconds, 10) === 0) {
      onComplete();
    }
  }, 1000);
};

setTime(minutes, seconds);

button.onclick = () => {
  if (
    button.innerText === 'STOP' &&
    parseInt(minutes, 10) === 0 &&
    parseInt(seconds, 10) === 0
  ) {
    minutes = tempMinutes;
    seconds = tempSeconds;
    setTime(minutes, seconds);
    ring.classList.remove('ending', 'circle');
  }
  if (button.innerText === 'START') {
    button.innerText = 'STOP';
    start();
  } else {
    pause();
    clearInterval(audio);
    button.innerText = 'START';
  }
};

settings.onclick = () => {
  button.innerText = 'START';
  setMinuteAndSecond(false);
  clearInterval(audio);
};

minute.onchange = (e) => {
  minutes = e.target.value;
  seconds = second.value;
  tempMinutes = minutes;
  tempSeconds = seconds;
};

second.onchange = (e) => {
  seconds = e.target.value;
  minutes = minute.value;
  tempMinutes = minutes;
  tempSeconds = seconds;
};
