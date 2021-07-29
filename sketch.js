var fixedRect, movingRect;
var car,wall1,wall2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  car = createSprite(200,200,50,50);
  car.shapeColor="yellow";
  car.velocityX=3;

  wall1=createSprite(650,200,20,100)
  wall1.shapeColor="blue";

  wall2=createSprite(50,200,20,100)
  wall2.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
movingRect.x=World.mouseX
movingRect.y=World.mouseY
if(isTouching(fixedRect,movingRect)){
  movingRect.shapeColor="red";
fixedRect.shapeColor="purple";
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
if (bounceOff(wall1,car)){
  car.shapeColor="pink";
  car.velocityX= - car.velocityX;
}
if (bounceOff(wall2,car)){
  car.shapeColor="orange";
  car.velocityX= - car.velocityX;
}
  
  drawSprites();
}
