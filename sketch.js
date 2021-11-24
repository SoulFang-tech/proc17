var ball,img,paddle;

function preload() {
  ballpin = loadImage("ball.png");
  paddlepin = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  
  
  paddle = createSprite (200,370,320,200);
  paddle.addImage("paddlevariable",paddlepin);
  
  ball = createSprite(200,20,120,200);
  ball.addImage("ballvariable",ballpin);
  ball.scale=0.8;
  ball.velocityY=9;
  

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(paddle , randomVelocity);
  ball.scale=0.5 ;

  paddle.bounceOff(edges[0]) ;
  paddle.bounceOff(edges[1]) ;
  paddle.bounceOff(edges[2]) ;
  paddle.bounceOff(edges[3]) ;

  if(ball.bounceOff(paddle)){
    randomVelocity();
  }

 
  
  
  if(keyDown(RIGHT_ARROW))
  {
     paddle.x=paddle.x +9
  }
  
  if(keyDown(LEFT_ARROW))
  {
    paddle.x=paddle.x -9;
  }
  if(ball.isTouching(edges[3])){
    ball.x = 200
    ball.y = 20
  }
  drawSprites();
  
}

function randomVelocity()
{
  var randomvelocity = random(1,6);
  ball.velocityX = randomvelocity;
  console.log(randomvelocity)
}

