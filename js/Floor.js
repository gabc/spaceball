function Floor (x) {
    this.x = x;
    this.y = 250;
    
    this.height = 25;
    this.width = 50;
    
    this.speed = 2;
}

Floor.prototype.tick = function () {
    this.x -= this.speed;
    ctx.fillRect(this.x, this.y,
		 this.width, this.height);

    return (this.x > -this.width);
};

Floor.prototype.collision = function (ball) {
    if (ball.y + ball.height >= this.y) {
	;
    }
};
