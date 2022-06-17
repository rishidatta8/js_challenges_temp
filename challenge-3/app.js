let keys = document.getElementsByTagName('a');

const playSound = () => {
    sound.src = './audio/key-' + index + '.mp3';
    index++;
    sound.play()
};

for (let i = 0; i < keys.length; i++) {
    const sound = new Audio()
    keys[i].onclick = (e)=>{
        e.preventDefault()
        const playSound = () => {
            sound.src = './audio/key-'+(i+1)+'.mp3';
            sound.play()
        };
        playSound();
        remove_hash_from_url()
    }
}


