var ctx;
var etape = null;
var statenum = 0;
var mouseX;
var mouseY;
var birds = [];
var bg = null;

window.onload = init;

function dealwithclick (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX);
}

function getNextFun () {
    if (statenum == 0) 
	statenum++;
    else if (statenum == 1) 
	statenum++;
    else if (statenum == 2) 
	statenum = 0;
    
    return statenum;
}

function intro () {
    ctx.fillText("Click on me!", 0, 50);    
    if (mouseX > 50) {
	return true;
    }
}

function jeu () {
    ctx.fillText("Play on me!", 0, 150);
    var v = birds[0].tick();

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
    if (etape[statenum]()) {
	statenum = getNextFun();
    }
    window.requestAnimationFrame(tick); // ~60fps
}

function init () {
    ctx = document.getElementById('canvas').getContext("2d");
    ctx.fillStyle = "blue";
    ctx.font = "40px Verdana";
    
    
    etape = [intro, jeu, fin];

    document.getElementById('canvas').onclick = dealwithclick;
    birds.push(new Bird());
    bg = new Background();
    tick();
}
