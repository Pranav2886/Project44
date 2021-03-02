var gamestate="start"
var box1,playerName,playImage,play,player,ground,bg,bgimage

function preload(){
playImage=loadImage("play image.jpg")
bgimage=loadImage("bg.png")

}





function setup() {
  createCanvas(displayWidth,displayHeight-150);
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(bgimage)
  bg.scale=5.1
 play=createSprite(displayWidth/2,displayHeight/2+150,1,1)
player=createSprite(100,displayHeight-250,15,15)
 player.visible=false
   box1=createInput("name") 
   ground=createSprite(displayWidth/2,displayHeight-150,displayWidth,20)
  
               
}

function draw() {
  
  background("blue");  
  if(gamestate==="start"){
box1.position(displayWidth/2,displayHeight/2)
ground.visible=false  
bg.visible=false
playerName=box1.value()

play.addImage(playImage)
play.scale=0.2
if(mousePressedOver(play)){
gamestate="play"
}
}

if(gamestate==="play"){
  background("green")
 play.destroy()
 if(bg.x<0){
bg.x=648
 }
 bg.visible=true
 bg.velocityX=-7
 box1.hide()
  player.visible= true;
  ground.visible=true

  if(keyDown("space")){
player.velocityY=-12
  }
player.velocityY=player.velocityY+0.8
}
player.collide(ground)
  drawSprites()
}
