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
	    setTimeout(function () {etape = etat()}, 10000);
	    return jeu;
	} else if (state == 2) {
	    state++;
	    jeui = 0;
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

var jeui = 0;

function jeu () {
    ctx.fillText("Play on me!", 0, 150);
    var v = birds[0].tick();

    if (v == true)
	jeui++;

    if (jeui < 5)
	v = false;
    else
	v = true;

    return v;
}

function fin () {
    ctx.fillText("Fin", 0, 200);
    if (mouseX < 40) {
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
