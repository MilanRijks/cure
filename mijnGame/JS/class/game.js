class Game {
	constructor(){
		this.SCENE_W = displayWidth;
		this.SCENE_H = displayHeight;
		this.gameActive = false;
		this.updateFrame = null;
	}

gameLoad() {
	createCanvas(displayWidth,displayHeight)
	playerCreate();
	this.crate = new NPC(700,650, null);
	this.crate.createNPC();
	this.man = new NPC(100,350,null);
	this.man.createNPC();
	this.baby = new NPC(1250,800,null);
	this.baby.createNPC();
	this.ending = new NPC(displayWidth/2,displayHeight/10);
	this.ending.createNPC();
	this.man2 = new NPC((displayWidth/9)*8,220)
	this.man2.createNPC();

	
	this.scene = new Scene();



}

gameDraw() {
		

	camera.on();
	camera.x = player.x;
	camera.y = player.y;
	if (mouse.pressing()) camera.zoom = 0.5;
	else camera.zoom = 2;


	if (player.x < 0) player.x = 0;
	if (player.y < 0) player.y = 0;
	if (player.x > this.SCENE_W) player.x = this.SCENE_W;
	if (player.y > this.SCENE_H) player.y = this.SCENE_H;
	
	
	background(255);

	stroke(100);
	strokeWeight(10);
	noFill();
	rect(-player.hw, player.hh, this.SCENE_W + player.w, this.SCENE_H + player.hh);

	noStroke();
	fill(0, 0, 0, 20);

	this.man2.drawNPC();
	this.ending.drawNPC();
	this.man.drawNPC()
	this.crate.drawNPC();
	this.baby.drawNPC();
	playerUpdate();
	}
}
