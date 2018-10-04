const mediaplayer = document.getElementsByClassName('mediaplayer')[0],
    player = mediaplayer.getElementsByTagName('audio')[0],
    title = document.getElementsByClassName('title')[0],
    playPause = document.getElementsByClassName('playstate')[0],
    stop = document.getElementsByClassName('stop')[0],
    next = document.getElementsByClassName('next')[0],
    prev = document.getElementsByClassName('back')[0],
    track = [
        "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3",
        "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3",
        "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"
    ],
    trackTitle = [
        "LA Chill Tour",
        "This is it band",
        "LA Fusion Jam"

    ];
let i = 0;

next.onclick = function () {
    if (i < track.length - 1) {
        i++;
    } else {
        i = 0;
    }
    player.src = track[i];
    title.title = trackTitle[i];
    mediaplayer.classList.add('play');
    player.play()
};

prev.onclick = function () {
    if (i >= 1) {
        i--;
    } else {
        i = track.length - 1;
    }
    player.src = track[i];
    title.title = trackTitle[i];
    mediaplayer.classList.add('play');
    player.play()
};

playPause.onclick = function () {
    if (mediaplayer.classList.contains('play')) {
        mediaplayer.classList.remove('play');
        player.pause();
    } else {
        mediaplayer.classList.add('play');
        player.play();
        player.onended = function() {
            mediaplayer.classList.remove('play');
        };
    }
};

stop.onclick = function () {
    player.pause();
    mediaplayer.classList.remove('play');
    player.currentTime = 0;
};