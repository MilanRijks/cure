let player;

function setup() {
	game = new Game();
	game.gameLoad();

}
function keyTyped() {
    if (!fullscreen()) {}
        fullscreen(true); 

	if (!game.gameActive) {
        game.gameActive = true;
    }
  }

function draw() {
if(!game.gameActive){
	background(255);
	textSize(40);
	text("Press Space to Interact with locations, click on the boxes to choose your answer. Good luck!",displayWidth/10,displayHeight/3);
	
}
else {
	if(game.scene.active) {
		if(game.scene.end) {
			game.scene.active = false;
			game.scene.end = false;
		}
		else {
		game.scene.cutscene();
		
		}
	}
	else {
	game.gameDraw();
	}
	if (game.scene.death) {
		setup();
	}
}
}

function windowResized() {
	resizeCanvas(displayWidth, displayHeight);
  }
