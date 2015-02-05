function Background() {
    this.image = new Image();
    this.image.src = "img/space.jpg";
}

Background.prototype.tick = function () {
    if (this.image.complete)
	ctx.drawImage(this.image, 0, 0);
    return true;
}

