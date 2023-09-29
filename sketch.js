var bgImg;
var sadBox,SadboxImg;

function preload () {
  bgImg=loadImage("./assets/background.jpeg");

  SadboxImg=loadImage("./assets/sad.png")
}

function setup(){
  createCanvas(500,500)

  var sadBox=createSprite(30,105,50,40)
  sadBox.addImage("Sad",SadboxImg)
  sadBox.scale=0.175;

  var wall1=createSprite(250,52,420,20)
  var wall2=createSprite(50,200,20,110)
}

function draw (){
  push()
 background(bgImg)
  pop()
 drawSprites()
}