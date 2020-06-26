
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies ;
const Constraint=Matter.Constraint ;
var pc,npc;
var ground1;
var player2 , enemy2;
var ArrowGroup;
var pcarrowimg;
var backimg , count=0;
var Arrow;
var score;
function preload(){
 backimg=loadImage("bakimg.png");
 player2=loadImage("player.png");
 enemy2=loadImage("enemy.png");
 pcarrowimg=loadImage("player arrow.png");
 ArrowGroup =new Group();
 

}


function setup() {
engine=Engine.create();
world=engine.world ;
  createCanvas(1350,600);
  pc = createSprite(280,440,10,10);
  pc.addImage(player2);
  pc.scale=0.8;
  npc=createSprite(1000,300,10,10);
  npc.addImage(enemy2);
  npc.scale=1;
  
   

  ground1=new Ground(270,500,60,5);
}

function draw() {
  background("white");
  image(backimg,0,600);
  Engine.update(engine); 

 
 ground1.display();
 
 if(keyCode=== 32){
   console.log("kill")
   createArrow(200,200)
 }
 

 if(ArrowGroup.isTouching(npc))
  {
  count=count+1        ;
  if (count=2){
    npc.destory();
  }
  }
  
 text(mouseX+":"+mouseY,100,400);
 text("Target:",640,20);
  drawSprites();

}
function createArrow(x,y){
  Arrow=createSprite(x,y,10,10);
  Arrow.addImage(pcarrowimg);
  Arrow.velocityX=1;
  Arrow.velocityY=-2;
  Arrow.scale=0.5;
 //console.log(Arrow);
}