var wall,speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(50,100)
  weight=random(400,1500)

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed
  
  wall=createSprite(1500,200,60,150)
  wall.shapeColor="white"
}

function draw() {
  background(0);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      }
        if(deformation<180&&defromation>100){
          car.shapeColor=color(230,120,0)
        }
            if(deformation<100){
              car.shapeColor=color(0,255,0)
            }
 
  }
  drawSprites();
}