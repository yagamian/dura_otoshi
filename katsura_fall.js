var width = window.innerWidth;


window.onload = function() {

    anim = TweenMax.to('#katsura', 2, {
        x: '+=1100',  //現在のウィンドウサイズにする関数指定に直す
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
