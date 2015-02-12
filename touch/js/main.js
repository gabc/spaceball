var ctx;
var etape = null;
var statenum = 0;
var mouseX;
var mouseY;
var birds = [];
var bg = null;

window.onload = init;

function dealwithclick (e) {
    mouseX = e.pageX - document.getElementById("canvas").offsetLeft;
    mouseY = e.pageY - document.getElementById("canvas").offsetTop;
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
	mouseX = -10;
	mouseY = -10;
	return true;
    }
}
var jeui = 0;
var timer = 0;
function jeu () {
    var d = new Date();

    if (!jeui){
	ctx.fillText("Play on me!", 0, 150);
	timer = d.getTime();
	console.log(timer + " NON");
    }
    
    var v = birds[0].tick();

    if (v) {
	jeui++;
	mouseX = -10;
	mouseY = -10;
	birds[0] = new Bird();
    } else {
	birds[0].move();
    }

    if (d.getTime() >= timer + 10000) {
	console.log(new Date().getTime());
	mouseX = -10;
	mouseY = -10;
	return true;
    } else {
	return false
    }
}

function fin () {
    ctx.fillText("Fin, t'as fait: " + jeui, 0, 200);
    if (mouseX > 0 && mouseY > 0) {
	jeui = 0;
	mouseX = -10;
	mouseY = -10;
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
