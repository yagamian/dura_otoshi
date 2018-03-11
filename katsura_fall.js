(function () {

    "use strict";

    window.addEventListener('DOMContentLoaded', function start() {
        var $fall = document.getElementById('fall');

    window.onload = function start() {

        anim = TweenMax.to('#katsura', 2, {
            x: function(){
                return (document.body.clientWidth - 200);
            }, 
            ease: 'linear',
            repeat: -1,
            yoyo: true
        });
    }

    function fall(){
        var fall = document.getElementById('fall');
        fall.disabled--;
        anim.pause();
        anim = TweenMax.to('#katsura', 1, {
            y: '+= 225',
            ease: 'linear'
        });
    }
})();
