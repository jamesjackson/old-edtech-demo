$(document).ready(function(){

    var images = $('img');
    var positions = [0, 24, 50, 65, 81, 112, 117, 121, 150, 165, 217, 229];

    var pointer = images[images.length - 1];

    var pauseBtn = document.getElementById("pause");

    var audioplay = document.createElement('audio');

    if (audioplay.canPlayType('audio/mpeg')) {
        audioplay.setAttribute('src','audio/audio123.mp3');
    }

    if (audioplay.canPlayType('audio/ogg')) {
        audioplay.setAttribute('src','audio/audio123.ogg');
    }

    audioplay.setAttribute('preload', 'auto');

    audioplay.oncanplay = function () {

    var timeline = new TimelineMax({repeat:0, onStart:function() {audioplay.play()}, onComplete:function() {audioplay.pause()}});

    timeline.totalDuration(positions[positions.length - 1]);

    for (i = 0; i < images.length - 1; i++) {
        timeline.set(images[i], {css:{autoAlpha:1}}, positions[i]);
    }

    //timeline.set(pointer, {css:{autoAlpha:0.5, scale:0.5}}, 2);

    timeline.set(pointer, {css:{autoAlpha:0.5, scale:0.5}}, 0);
    //timeline.to(pointer, 3, {css:{autoAlpha:0.5, scale:0.5}}, 2);

    timeline.to(pointer, 2, {right:300}, 3);
    timeline.to(pointer, 2, {bottom:100}, 5);


    //timeline.to(pointer, 10, {
    //
    //    css:{autoAlpha:0.5, scale:0.5},
    //
    //    bezier: {
    //        type: "soft",
    //        values: [{
    //            x: 0,
    //            y: 50
    //        }, {
    //            x: 50,
    //            y: 50
    //        }, {
    //            x: 100,
    //            y: 50
    //        }, {
    //            x: 150,
    //            y: 200
    //        }, {
    //            x: 50,
    //            y: 100
    //        }, {
    //            x: 0,
    //            y: 50
    //        }]
    //        //autoRotate: autoRotate
    //    },
    //    //ease for slip-n-slide-like animation wheeee
    //    ease: Circ.easeInOut
    //});

    //timeline.to(pointer, 5, {css:{autoAlpha:0.5, scale:0.5}, bezier:{type:"cubic", values:[{x:100, y:250}, {x:150, y:100}, {x:300, y:500}, {x:500, y:400}], autoRotate:["x","y","rotation", 0, true]}, ease:Power1.easeInOut});

    //timeline.to(pointer, 5, {css:{autoAlpha:0.5, scale:0.5}, bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});

    pauseBtn.onclick = function() {
        timeline.paused(!timeline.paused());
        pauseBtn.innerHTML = timeline.paused() ? "play" : "pause";
        timeline.paused() ? audioplay.pause() : audioplay.play();
    }

    };


});