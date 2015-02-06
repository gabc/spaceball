var ctx;
var sprites = [];
var floors = [];
var floorPix = 0;
window.onload = init;

document.onkeydown = dealwithkeys;

function dealwithkeys (e) {
    if (e.which == 65) {
	sprites[1].x -= 10;
    } else if (e.which == 68) {
	sprites[1].x += 10;
    }
};

function init () {
    ctx = document.getElementById('canvas').getContext("2d");
    ctx.fillStyle = "blue";
    sprites.push(new Background());
    sprites.push(new Ball());

    for (var i = 0; i < 150; i++) {
	if (Math.random() > 0.5) {
	    floors.push(new Floor(i * 50));
	}
    }
    tick();
}

function addFloor () {
    if (Math.random() < 0.6) {
	floors.push(new Floor(500));
    }
}

function die () {
    alert("You die");
}

function tick () {
    for (var i = 0; i < sprites.length; i++) {
	if (!sprites[i].tick()) {
	    sprites.splice(i, 1);
	    i--;
	    die();
	}
    }
    
    for (i = 0; i < floors.length; i ++) {
	console.log(sprites[1]);
	floors[i].collision(sprites[1]);
	if (!floors[i].tick()) {
	    floors.splice(i, 1);
	    i--;
	}
    }
    
    floorPix++;
    if ((floorPix % 50) == 0) {
    	floorPix = 0;
    	addFloor();
    }

    window.requestAnimationFrame(tick); // ~60fps
}
