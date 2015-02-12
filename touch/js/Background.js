function Background () {
    this.image = new Image();
    this.image.src = "../img/space.jpg";
    this.color = "red";
}

Background.prototype.tick = function () {
    temp = ctx.fillStyle;
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, 500, 500);
    ctx.fillStyle = temp;

    // if (this.image.complete)
    // 	ctx.drawImage(this.image, 0, 0);
    return true;
};
