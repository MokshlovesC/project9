var box ;
function setup() {
  createCanvas(400,400);
  background(30);


box = createSprite(200,200,30,30);
}
function draw() 
{
if (keyIsDown(RIGHT_AAROW)){

  background("red");
}
if (keyIsDown(LEFT_AAROW)){
  background("yellow");
}
if (keyIsDown(UP_AAROW)){
  background("blue");
}
if (keyIsDown(DOWN_AAROW)){
  background("orange");
}
drawSprites();
}