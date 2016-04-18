(function(exports){
    'use strict';
    var pop_sound = new Audio();
    pop_sound.setAttribute('src', './media/pop.mp3');
    pop_sound.addEventListener('canplay', function() {
        // this.play();
    });
    window.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.brand').addEventListener('mouseenter', function() {
            pop_sound.play();
        });
    });
})(this);