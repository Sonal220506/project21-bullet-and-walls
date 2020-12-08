var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
 
  bullet = createSprite(50, 200, 70, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = ('white');
  
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background('black'); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(225,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,225,0);
    }
  }

  bullet.depth = wall.depth;
  bullet.depth = bullet.depth + 1;
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width/2;
  wallLeftEdge = lwall.x - lwall.width/2;
  if(bulletRightEdge >=wallLeftEdge){
    return true
  }
  return false;
}