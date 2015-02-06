var ctx;
var etape = null;
var mouseX;
var mouseY;
var birds = [];
var bg = null;

function stateNext () {
    var state = 0;
    return function () {
	if (state == 0) {
	    state++;
	    return intro;
	} else if (state == 1) {
	    state++;
	    return jeu;
	} else if (state == 2) {
	    state++;
	    return fin;
	} else {
	    console.log(state);
	    state = 0;
	    return intro;
	}
    };
}

var etat = stateNext();

window.onload = init;

function dealwithclick (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX);
}

function intro () {
    ctx.fillText("Click on me!", 0, 50);    
    if (mouseX > 50) {
	return true;
    }
}

function jeu () {
    ctx.fillText("Play on me!", 0, 150);
    return birds[0].tick();
}

function fin () {
    ctx.fillText("Fin", 0, 200);
    if (mouseY < 200) {
	return true;
    }
}

function tick () {
    bg.tick();
    if (etape()) {
	etape = etat();
    }
    window.requestAnimationFrame(tick); // ~60fps
}

function init () {
    ctx = document.getElementById('canvas').getContext("2d");
    ctx.fillStyle = "blue";
    ctx.font = "40px Verdana";
    
    etape = stateNext();
    
    document.getElementById('canvas').onclick = dealwithclick;
    birds.push(new Bird());
    bg = new Background();
    tick();
}
