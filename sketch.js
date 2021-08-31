var ship,travellingShip;
var sea,seaImage;

function preload(){
  travellingShip=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage=loadImage("sea.png");
  
}

function setup(){
  createCanvas(600,400);
  sea = createSprite(50,50,200,200);
  sea.addAnimation("sea",seaImage);
  sea.x=sea.width/2;
  sea.velocityX=4;
  sea.addImage("sea",seaImage);

  ship = createSprite(120,150,100,50);
  ship.addAnimation("ship",travellingShip);
  ship.scale=0.2;


}

function draw() {
  background("lightblue");
console.log(sea.x);
  if(sea.x>700){
    sea.x=300;
  }

  drawSprites();
 
}
