
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;
var forest,forest1;
var size;
function preload(){
  forest1=loadImage("f0c67138e03caef (1).gif")
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(575,525);
  forest=createSprite(200,200,50,50);
  forest.addImage("edth",forest1)
  forest.velocityX=-7
  monkey=createSprite(50,435,10,10);
  ground=createSprite(50,455,100,10);
  monkey.addAnimation("edf",monkey_running)
  monkey.scale=0.1
  score=0;
  obstacleGroup=new Group();
  foodGroup=new Group();
  ground.visible=false; 
  size=0;
}


function draw() {
  background("white");
  monkey.collide(ground)
  if (forest.x < 0){
    forest.x = forest.width/2;
  }
  if(keyWentUp("space")&&monkey.y>350) {
    monkey.velocityY=-15;
  }
  if(monkey.isTouching(foodGroup)){
    banana.lifetime=0;
    score=score+1
    
  }
   if(monkey.isTouching(obstacleGroup)){
    monkey.scale=0.1
  }
  monkey.velocityY = monkey.velocityY +0.8
    switch(score){
      case 10:monkey.scale=0.12
       break;
      case 20:monkey.scale=0.14
        break;
      case 30:monkey.scale=0.16
        break;
      case 40:monkey.scale=0.18
        break;
        default:break;
    }
  //monkey.debug=true;
  spawnbananas() ;
  spawnobstacles();
  drawSprites();
  
  console.log(monkey.scale)
  stroke("")
  fill("blue")
  textSize(40);
text ("Score="+score,180,100);

}  

function spawnobstacles() {
  //
  if (frameCount % 300 === 0) {
     obstacle= createSprite(800,425,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.25;
    obstacle.velocityX = -7;
    obstacle.setCollider("circle",0,0,180)
     obstacle.lifetime = 300; 
    obstacleGroup.add(obstacle);
    //obstacle.debug=true;
  }
  
}

function spawnbananas() {

  if (frameCount % 150 === 0) {
    banana = createSprite(600,300,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -7   ;
    banana.lifetime = 300;
   foodGroup.add(banana);
  }
  
}



