let keys = document.getElementsByTagName('a');

const playSound = (index, sound) => {
    sound.src = './audio/key-' + index + '.mp3';
    sound.play()
};

for (let i = 0; i < keys.length; i++) {
    const sound = new Audio()
    keys[i].onclick = event =>{
        event.preventDefault()
        playSound(i+1, sound);
    }
}

