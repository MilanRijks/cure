class Speaker {
    constructor(sprite,x,y,width,height) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }
draw() {
    image(this.sprite,this.x,this.y,this.width,this.height);
}

}