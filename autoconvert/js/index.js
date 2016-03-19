$(document).ready(function(){

    var images = $('img');
    var positions = [0, 24, 50, 65, 81, 112, 117, 121, 150, 165, 217, 228];

    var audioplay = document.createElement('audio');

    if (audioplay.canPlayType('audio/ogg')) {
        audioplay.setAttribute('src','audio/audio123.ogg');
    }

    if (audioplay.canPlayType('audio/mpeg')) {
        audioplay.setAttribute('src','audio/audio123.mp3');
    }

    audioplay.setAttribute('preload', 'auto');

    var timeline = new TimelineMax({repeat:0, onStart:function() {audioplay.play()}, onComplete:function() {audioplay.pause()}});

    timeline.totalDuration(positions[positions.length - 1]);

    for (i = 0; i < images.length; i++) {
        timeline.set(images[i], {css:{autoAlpha:1}}, positions[i]);
    }

});