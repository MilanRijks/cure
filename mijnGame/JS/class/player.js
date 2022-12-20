function playerCreate() {
	player = new Sprite(50,100);
	player.addAni("assets/playerstamd.png"); 
	player.addAni("left", 'assets/playerstamd.png',
						'assets/playerleft.png');
	player.addAni('right', 'assets/playerstamd.png',
						'assets/playerright.png');
	player.ani = 'default';
	player.height = 100;
	player.width = 50;
	player.rotationDrag = 100000;
	player.drag = 2;
}



function playerUpdate() {
    if (kb.pressing('a')) { player.vel.x = -5; player.ani = 'left'; }
	else if (kb.pressing('d')) {player.vel.x = 5; player.ani = 'right';}
	else {player.vel.x = 0; player.ani ='default'; }
	if (kb.pressing('w')) {player.vel.y = -5;player.ani = 'right';}
	else if (kb.pressing('s')){ player.vel.y = 5;player.ani = 'right';}
	else player.vel.y= 0; 



	ellipse(player.x, player.y + 50, 80, 30);

    player.draw();
	
}


