var diver;
var bg;
var plasticBags_img, plasticBags;
var plasticBottles_img, plasticBottles;
var plasticCan, plasticCan_img;
var plasticwaste;
var plasticWasteGroup;

var turtlesSaved = 0;

var bomb, bomb_img;
var bombSound;

var diver, diver_img;
var staticDiver, staticDiver_img;

var octopus, octopus_img;
var nemo, nemo_img;
var angelFish, angelFish_img;

var life1, life2, life3, life4, life5;
var life1_img, life2_img, lif3_img, life4_img;

var introBg, introBg_img;

var flippedDiverStatic, flippedDiver_img;

var gameState = "instructions";

var count = 0;

var scoreText = 0;
var score, score_img;

var marineNinja, marineNinja_img;

var howToPlay, howToPlay_img;
var instructions, instructions_img;

var playButton, playButton_img
var  BookInstructionButton, BookImstructionButton_img;

var playText, playText_img;


var winText, winText_img;
var loseText, loseText_img;

var tempbg;

var fishGroup;

var gameSound;
var winSound;

var jelly1, jelly1_img;
var jelly2, jelly2_img;

var urchin, urchin_img;

var shark, shark_img;
var playAgain, playAgain_img;

var touchedFish = 0;

var  LoseSound;

var nxtlevelbtn, nxtlevelbtn_img;

var MarineNinjaLogo, MarineNinjaLogo_img;

var bag, bag_img;
var can,can_img;
var canWithStraw, cupWithStraw_img;

var turtle1, turtle1_img;
var net, net_img;


function preload(){
  bg = loadImage('images/THEFINALIMGBG.png');

  plasticBags_img = loadImage('images/plasticbottle1.png');
  plasticBottles_img = loadImage('images/plasticbottle.png'); 

  playText_img = loadImage('images/PLAYTEXT.png');
  BookInstructionButton_img = loadImage('images/BookInstructionsText.png');
  introBg_img = loadImage('images/INTROBG.png');

  score_img = loadImage('images/SCOREBOARD.png');

  marineNinja_img = loadImage('images/MARINENINJALOGO.png');

  howToPlay_img = loadImage('images/HowToPlayTitle.png');
  instructions_img = loadImage('images/Level3InstructionsTest1.png');

  diver_img = loadAnimation('images/diverImg1.png','images/diverImg2.png','images/DiverImg3.png','images/DiverImg4.png','images/DiverImg5.png','images/DiverImg6.png','images/DiverImg7.png','images/DiverImg8.png')
  staticDiver_img = loadImage('images/DiverImg4.png');
  
  flippedDiver_img = loadAnimation('images/flippedDiver1.png','images/flippedDiver2.png','images/flippedDiver3.png','images/flippedDiver4.png','images/flippedDiver5.png','images/flippedDiver6.png','images/flippedDiver7.png','images/flippedDiver8.png');
  flippedDiverStatic = loadImage('images/flippedDiver1.png');

  life1_img = loadImage('images/LifeLine.png');
  life2_img = loadImage('images/LifeLine.png');
  life3_img = loadImage('images/LifeLine.png');
  life4_img = loadImage('images/LifeLine.png');
  life5_img = loadImage('images/LifeLine.png');

  net_img = loadImage('images/FISHNET.png');

  bomb_img = loadImage('images/bomb.png'); 
  bombSound = loadSound('Sounds/Bomb.wav');

  octopus_img = loadImage('images/Octopus.png');
  nemo_img = loadImage('images/clownfish.png');

  playButton_img = loadImage('images/PlayButton.png');

  angelFish_img = loadImage('images/angelfish.png');

  winText_img = loadImage('images/Level3Win.png');
  loseText_img = loadImage('images/Level3Lose.png');

  tempbg = loadImage('images/haha.jpg');

  gameSound = loadSound('Sounds/gameSoundTrial.mp3');
  winSound = loadSound('Sounds/Win.mp3');
  LoseSound = loadSound('Sounds/Fail.mp3');

  jelly1_img = loadImage('images/jellyfish1.png');
  jelly2_img = loadImage('images/jellyfish2.png');

  shark_img = loadImage('images/Shark1.png');

  urchin_img = loadImage('images/Urchin.png');

  playAgain_img = loadImage('images/PlayAgain.png');

  nxtlevelbtn_img = loadImage('images/Level3Btn.png');
    
  MarineNinjaLogo_img = loadImage('images/Logo.png');

  bag_img = loadImage('images/Bag_latest.png');
  can_img = loadImage('images/Can_latest.png');

  cupWithStraw_img = loadImage('images/cupWithstraw_latest.png');

  turtle1_img = loadImage('images/turtleMain.png');
 

}
function setup() {

  
  //createCanvas(1200,310);  
 createCanvas(windowWidth, windowHeight);

   octopus = createSprite(280,250);
   octopus.addImage(octopus_img);
   octopus.scale = 0.5;
   octopus.visible = false; 
  

   //diver = createSprite(80,150);
diver = createSprite(0.1*windowWidth,0.2*windowHeight);
diver.addAnimation("diversfirstimg",staticDiver_img);
diver.scale = 0.25;

//life1 = createSprite(1105,50);
life1 = createSprite(0.95*windowWidth,0.06*windowHeight);
life1.addImage(life1_img);
life1.scale = 0.5;

//life2 = createSprite(1040,50);
life2 = createSprite(0.95*windowWidth,0.16*windowHeight)
life2.addImage(life2_img);
life2.scale = 0.5;


//life3 = createSprite(975,50);
life3 = createSprite(0.95*windowWidth,0.26*windowHeight)
life3.addImage(life3_img);
life3.scale = 0.5;

//life4 = createSprite(910,50);
life4 = createSprite(0.95*windowWidth,0.36*windowHeight)
life4.addImage(life4_img);
life4.scale =0.5;

   //life5 = createSprite(845,50);
   life5 = createSprite(0.95*windowWidth,0.46*windowHeight)
   life5.addImage(life5_img)
   life5.scale = 0.5;

   net = createSprite(1065,0);
   net.addImage(net_img);
   net.scale = 0.75;
   net.visible = false;

   diver.addAnimation("diverMoving",diver_img);
   diver.addAnimation("flippedDiver",flippedDiver_img);
   diver.addAnimation("flippedDiverInStatic",flippedDiverStatic);

   playAgain = createSprite(1545,438);
   playAgain.addImage(playAgain_img);
   playAgain.scale = 0.75;
   playAgain.visible = false;

   plasticWasteGroup = new Group();
   fishGroup = new Group();

   
 //introBg = createSprite(600,150);
  introBg = createSprite(windowWidth, windowHeight);
  introBg.addImage(bg);
  //introBg.scale = 0.075
  introBg.visible = false;

  turtle1 = createSprite(1756,414);
  turtle1.addImage(turtle1_img);
  turtle1.scale = 0.25;
  turtle1.visible = false;

  marineNinja = createSprite(950,370);
  marineNinja.addImage(marineNinja_img);
  marineNinja.scale = 0.75;
  marineNinja.visible = false;

  howToPlay = createSprite(windowWidth/2,100);
  howToPlay.addImage(howToPlay_img);
  howToPlay.scale = 0.85;
  howToPlay.visible = false;

  instructions = createSprite(windowWidth/2, 500);
  instructions.addImage(instructions_img);
  instructions.scale = 1.25;
  instructions.visible = false;


  playButton = createSprite(0.55*windowWidth,windowHeight/2);
  playButton.addImage(playButton_img);
  playButton.scale = 0.75;
  playButton.visible = false;
  
  BookInstructionButton = createSprite(1400,350);
  BookInstructionButton.addImage(BookInstructionButton_img);
  BookInstructionButton.scale = 0.5;
  BookInstructionButton.visible = false;
  
  //playText = createSprite(660,415);
  //playText.addImage(playText_img);
 // playText.scale = 0.5;
 // playText.visible = false;

  score = createSprite(150,100);
  score.addImage(score_img);
  score.scale = 0.5;
  score.visible = false;

  winText = createSprite(windowWidth/2, windowHeight/2);
  winText.addImage(winText_img);
  winText.scale = 0.55;
  winText.visible = false;
   
  loseText = createSprite(windowWidth/2, windowHeight/2);
  loseText.addImage(loseText_img);
  loseText.scale = 0.55;
  loseText.visible = false;

 nxtlevelbtn = createSprite(1403,344);
 nxtlevelbtn.addImage(nxtlevelbtn_img);
 nxtlevelbtn.visible = false;

 MarineNinjaLogo = createSprite(112,115);
 MarineNinjaLogo.addImage(MarineNinjaLogo_img);
 MarineNinjaLogo.scale = 0.17;

  gameSound.loop();
  gameSound.play();

}

function draw(){

  background(tempbg);

  if(gameState === "play"){

  MarineNinjaLogo.x = 0.915*windowWidth;
  MarineNinjaLogo.y = windowHeight/1.25;
  
  if(frameCount > 100){
    spawnPlasticWaste();
    spawnFish();
    spawnUrchins();
    
  }
   howToPlay.visible = false;

   playButton.visible = false;
   BookInstructionButton.visible = false;

  // playText.visible = false;
   score.visible = true;
   instructions.visible = false;

   if(keyWentDown(RIGHT_ARROW)){
     diver.changeAnimation("diverMoving",diver_img);
     diver.velocityX = 4;
   }
   if(keyWentUp(RIGHT_ARROW)){
     diver.changeAnimation("diversfirstimg",staticDiver_img);
     diver.velocityX = 0;
   }
   if(keyWentDown(DOWN_ARROW)){
    diver.changeAnimation("diverMoving",diver_img);
    diver.velocityY = 4;
  }
  if(keyWentUp(DOWN_ARROW)){
    diver.changeAnimation("diversfirstimg",staticDiver_img);
    diver.velocityY = 0;
  }
  if(keyWentDown(UP_ARROW)){
    diver.changeAnimation("diverMoving",diver_img);
    diver.velocityY = -4;
  }
  if(keyWentUp(UP_ARROW)){
    diver.changeAnimation("diversfirstimg",staticDiver_img);
    diver.velocityY = 0;
  }
  if(keyWentDown(LEFT_ARROW)){
    diver.changeAnimation("flippedDiver",flippedDiver_img);   
    diver.velocityX = -4
  }
  if(keyWentUp(LEFT_ARROW)){
    diver.changeAnimation("flippedDiverInStatic",flippedDiverStatic);
    diver.velocityX = 0;
  }
  

   if(count === 3){
     life1.destroy();
   }
    if(count === 6){
     life2.destroy();
   }
    if(count === 9){
     life3.destroy();

     plasticWasteGroup.destroyEach();
     fishGroup.destroyEach();
     diver.visible = false;

     loseText.visible = true;
   }
   /*
    if(count === 12){
     life4.destroy();
   }
    if(count === 15){
     life5.destroy();
     
   }
   */
   
  }//gameState play ends here
  
  //bombing the plastics
  for(var i = 0; i < plasticWasteGroup.length; i++){
    if(plasticWasteGroup.get(i).y >= 696){
      plasticWasteGroup.get(i).addImage(bomb_img);
      plasticWasteGroup.get(i).scale = 0.1;
      plasticWasteGroup.get(i).velocityY = 0;
     
      if(frameCount % 50 === 0 && plasticWasteGroup.get(i).y >= 696){
        count++
        bombSound.play();
        plasticWasteGroup.get(i).destroy();
        
      }
      
    }
    if(diver.isTouching(plasticWasteGroup.get(i)) && plasticWasteGroup.get(i).y < 696){
      plasticWasteGroup.get(i).destroy();
      scoreText = scoreText + 5;           
    }
    if(diver.isTouching(fishGroup.get(i))){
      fishGroup.get(i).destroy();
     touchedFish = touchedFish + 3;
    }
    if(touchedFish === 3){
      life1.destroy();
    }
    if(touchedFish === 6){
      life2.destroy();
    }
    if(touchedFish === 9){
      life3.destroy();
    }
    if(touchedFish === 12){
      life4.destroy();
    }
    if(touchedFish === 15){
      life5.destroy();
      gameState = 'END';
    }
    
   }//for loop ends here and bombing the plastics too

   turtle1.visible = true;
    turtle1.velocityX = -5;

    net.visible = true
    net.velocityY = 2;

    if( turtlesSaved === 0 && net.y >= 310 ){
      net.velocityY = 2;
      turtle1.velocityX = 0;
      turtle1.velocityY = 2;
      
      if(turtle1.y >= 770){
        net.velocityY = 0;
        turtle1.velocityY = 0;

        if(mousePressedOver(net)){
          net.x = 10000; 
          net.velocityY = 0;
           
          turtlesSaved = 1;   
          scoreText = scoreText + 100;       
          
      }
      
      }
    }
    if(turtlesSaved === 1){
      turtle1.velocityX = -5;
       turtle1.velocityY = -3;
      
    }    
    if(turtlesSaved === 1 && frameCount % 500 === 0){
      turtlesSaved = 0;
      net.x = 1065;
      net.y = 0;
      turtle1.x = 1756;
      turtle1.y = 414;
      turtle1.velocityX = -5;
      turtle1.velocityY = 0;
    }
    if(scoreText >= 200){
      turtlesSaved = 2;
    }

   //gameStates start

   if(gameState === "play"){
    
    background(bg);
    
    fill("white");
    textSize(50);
    text(scoreText,217,80);
    net.visible = true;
     turtle1.visible = true;

    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    life4.visible = true;
    life5.visible = true;    
    
   } 
   
   //win
   if(scoreText === 100){
    winText.visible = true;
    gameState = "WIN";
   }
   
if(gameState === "WIN"){
 
 //greet();   
  plasticWasteGroup.destroyEach();
  fishGroup.destroyEach();
  diver.visible = false;
 // winSound.play();

 play = true;
  playSound();

  greet();
 

  //noLoop();
  //gameSound.pause();

}
//lose
if(gameState === "END"){

  playAgain.visible = true;
  plasticWasteGroup.destroyEach();
  fishGroup.destroyEach();
  diver.visible = false;
  score.visible = false;
  loseText.visible = true;

  play = true;
  playSoundWhenLost();

  if(mousePressedOver(playAgain)){
    retry();
   }

  //LoseSound.play();

  //noLoop();

}


//intro gameStates
  if(gameState === "instructions"){
    diver.visible = false;
    howToPlay.visible = true;
   BookInstructionButton.visible = true;
   playButton.visible = true;
  // playText.visible = true;
     playButton.x = 550;
    // playText.x = 510;
     BookInstructionButton.visible = false;
     instructions.visible = true;

     life1.visible = false;
     life2.visible = false;
     life3.visible = false;
     life4.visible = false;
     life5.visible = false;

     net.visible = false;
     turtle1.visible = false;

    

    if(mousePressedOver(playButton)){
      gameState = "play";
      playButton.visible = false;
   //   playText.visible = false;
      introBg.visible = false;
      diver.visible = true;
    }
    
      
    }
   // fill("white");
 //   text(mouseX + ":" + mouseY, 600,150);
    drawSprites();

    
  }//function Draw ends here
  
//spawning plastics
function spawnPlasticWaste(){
  /*
    if(frameCount % 50 === 0 && diver.x <= 160){
      var rand = Math.round(random(1,2));
      //var plasticwaste = createSprite(random(320,520), random(-5,-15));
      var plasticwaste = createSprite(random(0.2*windowWidth, 0.9*windowWidth), random(-5,-15));
  
      switch(rand){
        case 1: plasticwaste.addImage(plasticBags_img);
       plasticwaste.scale = 0.03
        break;
  
        case 2: plasticwaste.addImage(plasticBottles_img);
        plasticwaste.scale = 0.1
        break;
  
        default:
          break;
        
      }
      plasticWasteGroup.add(plasticwaste);
      plasticwaste.velocityY = 1 + scoreText/25; 
    }
    */
  
    if(frameCount % 10 === 0){
      if(frameCount % 30 === 0){
        var rand = Math.round(random(1,5));
        //var plasticwaste = createSprite(random(320,520), random(-5,-15));
        var plasticwaste = createSprite(random(0.2*windowWidth, 0.9*windowWidth), random(-5,-15));
    
        switch(rand){
          case 1: plasticwaste.addImage(plasticBags_img);
         plasticwaste.scale = 0.03;
          break;
    
          case 2: plasticwaste.addImage(plasticBottles_img);
          plasticwaste.scale = 0.1;
          break;

          case 3: plasticwaste.addImage(bag_img);
          plasticwaste.scale = 1.25;
          break;

          case 4: plasticwaste.addImage(can_img);
          plasticwaste.scale = 1.25;
          break;

          case 5: plasticwaste.addImage(cupWithStraw_img);
          plasticwaste.scale = 1.25;
          break;
    
          default:
            break;
          
        }
        plasticWasteGroup.add(plasticwaste);
        plasticwaste.velocityY = 1 + scoreText/25; 
      }
    }
      /*
      var rand = Math.round(random(1,2));
      //var plasticwaste = createSprite(random(320,480), random(-5,-15));
      var plasticwaste = createSprite(random(0.4*windowWidth,0.9*windowWidth), random(-5,-15));
  
      switch(rand){
        case 1: plasticwaste.addImage(plasticBags_img);
       plasticwaste.scale = 0.03
        break;
  
        case 2: plasticwaste.addImage(plasticBottles_img);
        plasticwaste.scale = 0.1
        break;
  
        default:
          break;
        
      }
      plasticWasteGroup.add(plasticwaste);
      plasticwaste.velocityY = 2 + scoreText/25; 
      
    }
    if(frameCount % 40 === 0 && diver.x > 320 && diver.x < 480 ){
      var rand = Math.round(random(1,2));
      var plasticwaste = createSprite(random(0.5*windowWidth, 0.9*windowHeight), random(-5,-15));
      switch(rand){
        case 1: plasticwaste.addImage(plasticBags_img);
       plasticwaste.scale = 0.03
        break;
  
        case 2: plasticwaste.addImage(plasticBottles_img);
        plasticwaste.scale = 0.1
        break;
  
        default:
          break;
        
      }
      plasticWasteGroup.add(plasticwaste);
      plasticwaste.velocityY = 2 + scoreText/25; 
      
    }
    if(frameCount % 40 === 0 && diver.x > 640 && diver.x < 800 ){
      var rand = Math.round(random(1,2));
      var plasticwaste = createSprite(random(0.3*windowWidth, 0.9*windowHeight), random(-5,-15));
      switch(rand){
        case 1: plasticwaste.addImage(plasticBags_img);
       plasticwaste.scale = 0.03
        break;
  
        case 2: plasticwaste.addImage(plasticBottles_img);
        plasticwaste.scale = 0.1
        break;
  
        default:
          break;
        
      }
      plasticWasteGroup.add(plasticwaste);
      plasticwaste.velocityY = 2 + scoreText/25; 
      
    }
    */
  
  }//spawning fish
function spawnFish(){
if(frameCount % 100 === 0){
  var rand = Math.round(random(1,5));
var fish = createSprite(random(1830,1700),random(100,450));

  switch(rand){
    case 1: fish.addImage(nemo_img);
    fish.mirrorX(fish.mirrorX()* -1);
    fish.scale = 0.8;
    break;

    case 2: fish.addImage(angelFish_img);
    fish.scale = 0.5;

    case 3: fish.addImage(shark_img);
    fish.scale = 0.2;
    break;

    case 4: fish.addImage(jelly2_img);
    fish.scale = 0.3;
    break;

    case 5: fish.addImage(jelly1_img);
    fish.scale = 0.3;
    break;

    default:
      break;
  }
  fish.velocityX = -5;
  fish.life = 500;
  fishGroup.add(fish);
  }
 }

 function spawnUrchins(){
  if(frameCount % 100 === 0){
    var rand = Math.round(random(1,2));
  var fish = createSprite(random(50,920),random(1850,930));
  
    switch(rand){
      case 1: fish.addImage(urchin_img);
      fish.scale = 0.25;
      break;
  
      case 2: fish.addImage(urchin_img);
      fish.scale = 0.25;
      break;
  
      default:
        break;
    }
    fish.velocityY = -5;
    fish.rotateToDirection = true;
    fish.lifetime = 1500;
    fishGroup.add(fish);
    }
   }
 //restart game
 function restart(){
   if(keyCode === UP_ARROW){

      gameState = "play";
      diver.visible = true;
      score.visible = true;
   }
 }

 //resize  the window screen to match the different phone, tab or PC sizes...
 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function greet() {
  window.location.href = '/Level-3-Video-Win';
}
function retry() {
  
  document.location.reload(true);  
}

