function Ball () {
    this.x = 0;
    this.y = 50;

    this.height = 20;
    this.width = 20;
    
    this.xspeed = 0;
    this.yspeed = 2;

    this.xvelocity = 0.5;
    this.yvelocity = 0.1;

    this.collided = false;
}

Ball.prototype.maxSpeed = function () {
    if (this.yspeed > 5)
	this.yspeed = 5;
    else if (this.yspeed < -5)
	this.yspeed = -5;
};

Ball.prototype.tick = function () {    
    this.yspeed += this.yvelocity;
    
    this.y += this.yspeed;

    this.maxSpeed();
    ctx.fillRect(this.x, this.y,
		 this.height, this.width);

    return (this.y < 300);
};

