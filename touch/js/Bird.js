function Bird () {
    this.x = Math.random() * 500 - document.getElementById("canvas").offsetLeft;
    this.y = Math.random() * 500 - document.getElementById("canvas").offsetTop;
    this.xspeed = Math.random() * 2;
    this.yspeed = Math.random() * 2;
    
    this.hauteur = 25;
    this.largeur = 25;
}

Bird.prototype.tick = function () {
    temp = ctx.fillStyle;
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.hauteur, this.largeur);
    ctx.fillStyle = temp;

    
    if (mouseX >= this.x && mouseX <= this.x + this.largeur &&
        mouseY >= this.y && mouseY <= this.y + this.hauteur)
	return true;
};

Bird.prototype.move = function () {
    if (this.x > 490) {
	this.xspeed = -this.xspeed;
    }
    if (this.y > 490) {
	this.yspeed = -this.yspeed;
    }
    if (this.x < 10) {
	this.xspeed = -this.xspeed;
    }
    if (this.y < 10) {
	this.yspeed = -this.yspeed;
    }
    
    this.x += this.xspeed;
    this.y += this.yspeed;
};
