var player;
var computer1;
var inviG;
var playerlife;
var computerlife;



function preload()
{
	bg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	player=createSprite(displayWidth/2+200,displayHeight/2+150,20,50);
	player.shapeColor="yellow";

	computer1=createSprite(displayWidth/2-200,displayHeight/2+150,20,50);
	computer1.shapeColor="red";

	player.debug=true;
	computer1.debug=true;

	inviG=createSprite(displayWidth/2,displayHeight/2+220,displayWidth,20)	
	playerlife=createSprite(displayWidth/2,displayHight/2)
}	


function draw() {


  
  background(bg);
  
  if(keyDown("SPACE")&&player.y>=displayHeight/2+180){
	player.velocityY=-10;

  } 

  if(keyDown("LEFT_ARROW")){
	  player.x-=5;
  }

  if(keyDown("RIGHT_ARROW")){
	  player.x+=10;
  }
	player.velocityY+=0.4;
	player.collide(inviG);


  drawSprites();
 
}



