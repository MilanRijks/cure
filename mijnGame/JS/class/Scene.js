class Button {
    constructor(x,y,text) {
      this.x = x;
      this.y = y;
      this.height = 70;
      this.width = 400;
      this.text = text;
    }
    
    mouseClick() {
      if (dist(this.x+200,this.y+70,mouseX,mouseY) < this.width/2 && mouse.released()) {
        return true;
      }
      else {
        return false;
      }
    }
    
    buttonDraw() {
      push();
      fill('gray');
      rect(this.x,this.y-24,this.width,this.height);
      textSize(24);
      fill('white');
      text(this.text,this.x+this.width/15,this.y+this.height/5);
      pop();    
    }
  }


class Scene {
    constructor() {
        this.active = false;
        this.end = false;
        this.scenes = new Array();
        this.options = new Array();
        this.dialogue = 0;
        this.death = false;
        this.died = loadImage('assets/died.png');

    }


text() {
    stroke(255);
    strokeWeight(6);
    fill('black');
    noStroke();
    rect(0,(displayHeight/3)*2, displayWidth, displayHeight/3);
    if (this.scenes == 0) {
      if (this.dialogue == 0) {
    this.Option1 = new Button((displayWidth/4),(displayHeight/6)*5,'Touch the slime');
    this.Option1.buttonDraw();
    this.Option2 = new Button((displayWidth/4)*2,(displayHeight/6)*5,'Stare at the slime')
    this.Option2.buttonDraw();
    this.Option3 = new Button((displayWidth/5)*2, (displayHeight/12)*11, 'Why does it have an eyepatch?')
    this.Option3.buttonDraw();
    push();
      fill('white');
      textSize(40);
      text('???',50,(displayHeight/3)*2+45)
      translate(0,80);
      textSize(24);
      text("You wake up in a place you don't remember, after walking around you encounter a strange slimey creature.",50,(displayHeight/3*2+45));
    pop();
        if (this.Option1.mouseClick()) {
          clear();
          this.dialogue = 1;
        }
        if (this.Option2.mouseClick()) {
          clear();
          this.dialogue = 2;
        }
        if (this.Option3.mouseClick()) {
          clear();
          this.dialogue = 3;
        }
      }
      if (this.dialogue == 1) {
        this.Option3.buttonDraw();
        this.BadOption = new Button((displayWidth/6), (displayHeight/12)*11,'Touch the slime again');
        this.BadOption.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("???",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("HEY, dont do that. I could accidentally dissolve you.",50,(displayHeight/3)*2+45);
        pop();
        if (this.Option3.mouseClick()) {
          clear();
          this.dialogue = 3;
        }
        if (this.BadOption.mouseClick()) {
          clear();
          this.dialogue = 8;
        }
      }
      if (this.dialogue == 8) {
        fill("red");
        textSize(60);
        translate(0,80);
        text("YOU DIED",50,(displayHeight/3)*2+45);
        textSize(20);
        translate(0,40);
        text("Press space to restart",50,(displayHeight/3)*2+45);
        if (kb.released(' ')) {
          this.death = true;
        }
      }
      if (this.dialogue == 2) {
        this.Option1.buttonDraw();
        this.Option3.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("???",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("What?",50,(displayHeight/3)*2+45);
        pop();
        if (this.Option3.mouseClick()) {
          this.dialogue = 3;
          clear();
        }
        if (this.Option1.mouseClick()) {
          this.dialogue = 1;
        }
      }
      if (this.dialogue == 3) {
        this.Option4 = new Button((displayWidth/4),(displayHeight/6)*5,"Where the hell am I?")
        this.Option4.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("John",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("Hi I'm John. This eyepatch really is just for style reasons, slimes actually cant lose limbs or organs.",50,(displayHeight/3)*2+45);
        pop();
        if(this.Option4.mouseClick()) {
          this.dialogue = 4;
          clear();
        }
      }
      if (this.dialogue == 4) {
        this.Option6 = new Button((displayWidth/4)*2, (displayHeight/12)*11,"Only a bit.")
        this.Option5 = new Button((displayWidth/4)*2,(displayHeight/6)*5,"Not at all, what are the Dunes?")
        this.Option5.buttonDraw();
        this.Option6.buttonDraw();
        this.Option7 = new Button((displayWidth/3)*2, (displayHeight/12)*11,"How do I get out of here?")
        push();
        fill('white');
        textSize(40);
        text("John",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("Well, thats new. I guess you don't remember anything. First of all, welcome to the Dunes. This isnt the nicest place to experience memory loss but you'll have to tough it out. Do you atleast remember what this place is?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
        pop();
        if(this.Option5.mouseClick()) {
          clear();
          this.dialogue = 5;
        }
        if(this.Option6.mouseClick()) {
          clear();
          this.dialogue = 6;
        }
      }
      if (this.dialogue == 5) {
        this.Option7.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("John",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("Hm.... You really don't know? Well then, the Dunes is a special place located around the middle of the Terran continent, due to a few unfortunate accidents it doesn't have any sort of government. It's mostly just a few big groups and small gangs. The most important faction to avoid would definitely the Watchers, they're extremely religious and don't care if you have to die to get what they want.",50,(displayHeight/3)*2+45, displayWidth-50, displayHeight/3);
        pop();
        if(this.Option7.mouseClick()) {
          clear();
          this.dialogue = 7;
        }
      }
      if (this.dialogue == 6) {
        this.Option7.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("John",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("Well if you know a bit I'm sure that's all you need to know, you don't look like any of the factions here so knowing the political situation won't be important for you. Though it is important to watch out for the Watchers. I'm sure you've heard of them before, those extremely religious people that go on about the wind and the sun.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
        pop();
        if(this.Option7.mouseClick()) {
          clear();
          this.dialogue = 7;
        }
      }
      if (this.dialogue == 7) {
        this.Option8 = new Button((displayWidth/4),(displayHeight/12)*11,"Lets go after the Watcher first.");
        this.Option9 = new Button((displayWidth/4)*2,(displayHeight/12)*11,"Lets take a gamble with that gang.");
        this.Option8.buttonDraw();
        this.Option9.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("John",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("Good question! I'm not quite sure myself, if anyone knows it'll probably be the Watchers or that group of gambling addicts. Lets go, your choice where we go first.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
        pop();
      
      if(this.Option8.mouseClick()) {
        clear();
        this.end = true;
        this.scenes = 1;
      }
      if(this.Option9.mouseClick()) {
        clear();
        this.end = true;
        this.scenes = 2;
      }
    }

}
  if (this.scenes == 1) {
    stroke(255);
    strokeWeight(6);
    fill('black');
    noStroke();
    rect(0,(displayHeight/3)*2, displayWidth, displayHeight/3);
    if (this.dialogue == 7) {
      this.Option10 = new Button((displayWidth/4)*3,(displayHeight/8)*6,"I'm me!");
      this.Option11 = new Button((displayWidth/4)*2,(displayHeight/8)*6,"A slime sent me here.")
      this.Option10.buttonDraw();
      this.Option11.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Who are you?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option10.mouseClick()) {
        clear();
        this.dialogue = 8;
      }
      if (this.Option11.mouseClick()) {
        clear();
        this.dialogue = 9;
      }
    }
    if (this.dialogue == 8) {
      this.Option12 = new Button((displayWidth/5)*2, (displayHeight/12)*11,"I want to leave the Dunes");
      this.Option12.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Well you do seem familiar to me, perhaps you've been touched by the sun aswell. What business does this one have here?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option12.mouseClick()) {
        clear();
        this.dialogue = 10;
      }
    }
    if (this.dialogue == 9) {
      this.Option19 = new Button((displayWidth/6), (displayHeight/12)*11,"Just trust me.");
      this.Option19.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("A slime sent you? Are you serious?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option19.mouseClick()) {
        clear();
        this.dialogue = 8;
      }
    }
    if (this.dialogue == 10) {
      this.Option13 = new Button((displayWidth/4)*3, (displayHeight/12)*11,"Is there really nothing?");
      this.Option14 = new Button((displayWidth/4)*2, (displayHeight/6)*5,"Return to the sun?");
      this.Option13.buttonDraw();
      this.Option14.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("That's quite the statement, I'm sorry but the winds will never guide you away from this place. Either accept it or return to the sun.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option13.mouseClick()) {
        clear();
        this.dialogue = 11;
      }
      if (this.Option14.mouseClick()) {
        clear();
        this.dialogue = 12;
      }
    }
    if (this.dialogue == 11) {
      this.Option15 = new Button((displayWidth/6), (displayHeight/14)*13,"My past?");
      this.Option16 = new Button((displayWidth/6)*5, (displayHeight/14)*13,"Weirdo, I'm out of here.");
      this.Option15.buttonDraw();
      this.Option16.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("If anyone knew, it would be the one who ended up here. Search your past lost one.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option15.mouseClick()) {
        clear();
        this.dialogue = 13;
      }
      if (this.Option16.mouseClick()) {
        clear();
        this.dialogue = 14;
      }
    }
    if (this.dialogue == 12) {
      this.Option27 = new Button((displayWidth/6), (displayHeight/14)*13,"Weirdo...")
      this.Option27.buttonDraw();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Yeah, the sun. The place where all live comes from, ofcourse thats where we return when we die. We get born in the sun, taken by the wind and the reverse when we die.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option27.mouseClick()) {
        this.dialogue = 14
        clear();
      }
    }
    if (this.dialogue == 13) {
      this.Option18 = new Button((displayWidth/4), (displayHeight/6)*5,"The sky?");
      this.Option18.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Yes, your past. It would be quite obvious if you knew how you got here to also get out.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option18.mouseClick()) {
        clear();
        this.dialogue = 15;
      }
    }
    if (this.dialogue == 14) {
      this.Option17 = new Button((displayWidth/4), (displayHeight/6)*5,'Lets gamble, I guess.');
      this.Option17.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("That's your loss, the winds will always guide you to the sun.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option17.mouseClick()) {
        clear();
        this.end = true;
        this.dialogue = 7;
        this.scenes = 2;
      }
    }
    if (this.dialogue == 15) {
      this.Option20 = new Button((displayWidth/4*2), (displayHeight/12)*11,"Goodbye weird guy!");
      this.Option20.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("If the sky is what you see, seek it out. Find where you came from and return to it. Now leave I have my own business to attend to.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option20.mouseClick()) {
        clear()
        this.end = true;
        this.scenes = 3;
      }
    }
  }
  if (this.scenes == 2) {
    if (this.dialogue == 7) {
      this.Option21 = new Button((displayWidth/4), (displayHeight/6)*5,"Looking to gamble.");
      this.Option21.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("The hell are you doing 'ere?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option21.mouseClick()) {
        clear();
        this.dialogue = 16;
      }
    }
    if (this.dialogue == 16) {
      this.Option22 = new Button((displayWidth/4)*2, (displayHeight/6)*5,"Can I just ask a question?");
      this.Option23 = new Button((displayWidth/4)*3, (displayHeight/6)*5,"John sent me.");
      this.Option22.buttonDraw();
      this.Option23.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("I ain't interested in gamblin' with trash, scram before I gut ya.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option22.mouseClick()) {
        clear();
        this.dialogue = 17
      }
      if (this.Option23.mouseClick()) {
        clear();
        this.dialogue =19;
      }
    }
    if (this.dialogue == 17) {
      this.Option24 = new Button((displayWidth/6), (displayHeight/12)*11, "That was my question..");
      this.Option24.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Listen kid, it don't matter what you've got, I don't want it. I may be a gambler but I have morals and I'm definitely not takin' from a kid. You don't even look like ya belong 'ere, I'll       take you to an exit if you just shut it.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option24.mouseClick()) {
        clear();
        this.dialogue = 18;
      }
    }
      if (this.dialogue == 18) {
        this.Option25 = new Button((displayWidth/4)*3, (displayHeight/6)*5,"Thank you!")
        this.Option25.buttonDraw();
        push();
        fill('white');
        textSize(40);
        text("???",50,(displayHeight/3)*2+45);
        translate(0,80);
        textSize(24);
        text("Great, we'll be goin to the tunnel, should bring ya to a way outta 'ere",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
        pop();
      
      if (this.Option25.mouseClick()) {
        clear();
        this.scenes = 4;
        this.end = true;
      }
    }
    if (this.dialogue == 19) {
      this.Option26 = new Button((displayWidth/4)*2, (displayHeight/12)*11,"What...")
      this.Option26.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("The slime? Really? Now that's the funniest thing i've 'eard all day. But ya should know what I do to liars...",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
    if (this.Option26.mouseClick()) {
      this.dialogue = 20;
      clear();
    }
  }
  if (this.dialogue == 20) {
    fill("red");
    textSize(60);
    translate(0,80);
    text("YOU DIED",50,(displayHeight/3)*2+45);
    textSize(20);
    translate(0,40);
    text("Press space to restart",50,(displayHeight/3)*2+45);
    if (kb.released(' ')) {
      this.death = true;
      }
    } 
  }
  if (this.scenes == 3) {
    if (this.dialogue == 15) {
    this.Option28 = new Button((displayWidth/4)*2, (displayHeight/12)*11,"Yeah word for word.");
    this.Option28.buttonDraw();
    push();
    fill('white');
    textSize(40);
    text("John",50,(displayHeight/3)*2+45);
    translate(0,80);
    textSize(24);
    text("He told you to find the sky?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
    pop();
    if (this.Option28.mouseClick()) {
      clear();
      this.dialogue = 21;
    }
    }
    if (this.dialogue == 21) {
      this.Option29 = new Button((displayWidth/6), (displayHeight/12)*11,"Onwards we go!!");
      this.Option29.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("John",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Weird.. Well I think I know one place where you can see the sky pretty clearly, let's check that out.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option29.mouseClick()) {
        clear();
        this.dialogue = 22
        this.scenes = 7;
      }
    }
  }
  if (this.scenes == 4) {
    if (this.dialogue == 18){
    this.Option30 = new Button((displayWidth/6), (displayHeight/12)*11,"I just want to leave.");
    this.Option31 = new Button((displayWidth/6)*3, (displayHeight/12)*11,"Some guy brought me");
    this.Option30.buttonDraw();
    this.Option31.buttonDraw();
    push();
    fill('white');
    textSize(40);
    text("???",50,(displayHeight/3)*2+45);
    translate(0,80);
    textSize(24);
    text("Hey there, might be important to ask you what you're doing here. I know it might be strange to be in a pure white hallway but if you just tell us how you got here we'll let you go on your merry way",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
    pop();
    if (this.Option30.mouseClick()) {
      clear();
      this.dialogue = 23;
    }
    if (this.Option31.mouseClick()) {
      clear();
      this.dialogue = 24;
    }
    }
    if (this.dialogue == 23) {
      this.Option32 = new Button((displayWidth/4)*2, (displayHeight/12)*11,"I do- CLONES?")
      this.Option32.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("You just want to leave? Weird, Never seen such a development within the clones or creatures we've dumped in here. Why do you feel like you need to leave?",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.Option32.mouseClick()) {
        this.dialogue = 25
        clear();
      }
    }
    if (this.dialogue == 24) {
      this.EndingOption2 = new Button(displayWidth/3,displayHeight/3,"Thank you!");
      this.EndingOption2.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Some guy? Ugh fine he probably brought you for a reason, just go on ahead.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.EndingOption2.mouseClick()) {
        clear();
        this.dialogue = 27;
        this.scenes = 5;
      }
    }
    if (this.dialogue == 25) {
      this.EndingOption1 = new Button(displayWidth/3,displayHeight/3,"what.")
      this.EndingOption1.buttonDraw();
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Oh right I forgot, yeah you are a clone. This whole area is a testing facility for magic aptitude, you are a strange case though, kind of almost feel bad if I have to erase you here.         Let me make it very very simple for you. You've been created out of the DNA of multiple different clones of me, we are the same but also not. This might seem like a lot but welcome to the real world.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (this.EndingOption1.mouseClick()) {
        clear();
        this.dialogue = 26;
      }
    }
    if (this.dialogue == 26) {
      push();
      fill('white');
      textSize(40);
      text("???",50,(displayHeight/3)*2+45);
      translate(0,80);
      textSize(24);
      text("Well good luck in your next life! I'm afraid I'll erase you now.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      translate(0,100);
      text("Press space to restart your next life.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3)
      pop();
      if (kb.released(' ')) {
        this.death = true;
      }
    }
  }
  if (this.scenes == 5) {
    if (this.dialogue == 27) {
    push();
    fill('white');
    textSize(40);
    translate(0,80);
    textSize(24);
    text("It's quite soothing here, I might aswell just stay here. ",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
    translate(0,100);
    text("Enjoy your time, press space if you have unfinished business.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
    pop();
    if (kb.released(' ')) {
      this.death = true;
      clear();
    }
  }
  }
  if (this.scenes == 7) {
    if (this.dialogue == 22) {
    this.EndingOption3 = new Button(displayWidth/3,displayHeight/3,"Can't we talk about this?")
    this.EndingOption3.buttonDraw();
    push();
    fill('white');
    textSize(40);
    text("Weirdo",50,(displayHeight/3)*2+45);
    translate(0,80);
    textSize(24);
    text("I've had enough, I remember you. I will make sure that you die under the scorching sun now.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
    pop();
    if (this.EndingOption3.mouseClick()) {
      clear();
      this.dialogue = 30
    }
  }
    if (this.dialogue == 30 ) {
      push();
      fill('white');
      textSize(40);
      translate(0,80);
      textSize(24);
      text("A sharp wind pierces through your chest, all feeling leaves your body as everything fades to black.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      translate(0,100);
      text("Press space to finish your unfinished business.",50,(displayHeight/3)*2+45, displayWidth, displayHeight/3);
      pop();
      if (kb.released(' ')) {
        this.death = true;
      }
    }
  }
}
scene() {
  this.player=loadImage('assets/her.png')
  this.Player = new Speaker(this.player,(displayWidth/6)*4,(displayHeight/5));
  this.watcher = loadImage('assets/watcher.png');
  this.Watcher = new Speaker(this.watcher,0,(displayHeight/5));
  this.john=loadImage('assets/john.png');
  this.John = new Speaker(this.john,0,(displayHeight/5)*2);
    if (this.scenes == 0) {

    noStroke();
    this.bg1=loadImage('assets/bng1.png');
   image(this.bg1,0,0,displayWidth,displayHeight);
   this.John.draw();
   this.Player.draw();
   
    }
    if (this.scenes == 1) {

      noStroke();
      this.bg2=loadImage('assets/bng2.png');
      image(this.bg2,0,0,displayWidth,(displayHeight/3)*2);
      this.Watcher.draw();
      this.Player.draw();
    }
    if (this.scenes == 2) {

      noStroke();
      this.bg3=loadImage('assets/bng3.png');
      image(this.bg3,0,0,displayWidth,displayHeight);
      this.gambler = loadImage('assets/gambler.png');
      this.Gambler = new Speaker(this.gambler,0,(displayHeight/6));
      this.Gambler.draw();
      this.Player.draw();
    }
    if (this.scenes == 3) {
      noStroke();
      this.bg4=loadImage('assets/bng4.png');
      image(this.bg4,0,0,displayWidth,displayHeight);
      this.John.draw();
      this.Player.draw();
    }
    if (this.scenes == 4) {
      noStroke();
      this.bg6=loadImage('assets/bng6.png');
      image(this.bg6,0,0,displayWidth,displayHeight);
      this.real =loadImage('assets/real.png');
      this.Real = new Speaker(this.real,0,(displayHeight/7));
      this.Player.draw();
      this.Real.draw();
    }
    if (this.scenes == 5) {
      noStroke();
      this.bg7 = loadImage('assets/sky.png');
      image(this.bg7,0,0,displayWidth,displayHeight);
    }
    if (this.scenes == 7) {
      noStroke();
      this.bg5=loadImage('assets/bng5.png');
      image(this.bg5,0,0,displayWidth,displayHeight);
      this.Player.draw();
      this.Watcher.draw();
    }
}

cutscene() {
    this.scene();
    this.text();
    // this.end = true;
}
}
