function Bird () {
    this.x = Math.random() * 500;
    this.y = Math.random() * 500;

    this.hauteur = 15;
    this.largeur = 15;
}

Bird.prototype.tick = function () {
    ctx.fillRect(this.x, this.y, this.hauteur, this.largeur);

    if (this.x + 15 > mouseX && this.x < mouseX)
	return true;
};
