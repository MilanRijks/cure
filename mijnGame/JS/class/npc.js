class NPC {
    constructor(x,y,sprite){
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }
    
    createNPC() {
        this.npc = new Sprite(this.x, this.y);
        this.npc.width = 50;
        this.npc.height = 100;
        this.npc.collider = 'static';
        this.npc.addAni('assets/npc.png');
        this.npc.overlap(allSprites);
        this.interact = new Sprite(this.x,this.y,250);
        this.interact.collider = 'static';
		this.interact.overlap(allSprites);
		this.interact.shapeColor.setAlpha(0);
    }
    drawNPC() {
        this.interact.draw();
        this.npc.draw();
        if (player.overlapping(this.interact) && kb.presses(' ')) {
            game.scene.active = true;
    }
    }
}
