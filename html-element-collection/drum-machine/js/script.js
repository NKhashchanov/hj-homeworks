const drums = document.getElementsByClassName('drum-kit__drum');
const play = document.getElementsByTagName('audio');
for (let i = 0; i < drums.length; i++) {
    drums[i].onclick = function() {
        play[i].currentTime = 0;
        play[i].play();
    }
}