const keys = document.getElementsByTagName('a');

for (let i = 0; i < keys.length; i += 1) {
  const sound = new Audio();
  keys[i].onclick = (e) => {
    e.preventDefault();
    const playSound = () => {
      sound.src = `./audio/key-${i + 1}.mp3`;
      sound.play();
    };
    playSound();
  };
}
