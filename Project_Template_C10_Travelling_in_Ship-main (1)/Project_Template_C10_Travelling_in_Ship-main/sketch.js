var sea, ship_running, ship, seaImage;
var invisibleGround;

function preload(){
ship = loadImage("ship.png");
ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  ship = createSprite(50,160,20,50);
  ship.addAnimation("running", ship_running);
  trex.scale = 0.5;

  sea = createSprite(200,180,400,20);
  sea.addImage("sea.png",seaImage);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("blue");

  trex.collide(invisibleGround);
  drawSprites();
}