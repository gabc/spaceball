function Ball () {
    this.x = 0;
    this.y = 0;

    this.xspeed = 0;
    this.yspeed = 2;

    this.xvelocity = 0.5;
    this.yvelocity = 0.1;

    this.collided = false;
}

Ball.prototype.tick = function () {
    this.yspeed += this.yvelocity;

    if (this.y + 20 >= 250) {
	this.yspeed = -this.yspeed;
    }
    this.y += this.yspeed;

    ctx.fillRect(this.x, this.y,
		 20, 20);
    // return true;
    return (this.y < 300);
};

Ball.prototype.maxSpeed = function () {
    if (this.xspeed > 7)
	this.xspeed = 7;
    else if (this.xspeed < -7)
	this.xspeed = -7;

    if (this.yspeed > 7)
	this.yspeed = 7;
    else if (this.yspeed < -7)
	this.yspeed = -7;
};
