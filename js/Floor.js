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

Floor.prototype.colision = function (ball) {
    	console.log("Mort?");
    if (ball.x < this.x - this.height || ball.x > this.x + this.height) {

    }
};
