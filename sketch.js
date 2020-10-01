

var Thickness,wall;


var bullet,Speed, Weight; 


function setup() {
  createCanvas(1600, 400);


	Speed=random(223,321)
	Weight=random(30,52)
    Thickness=random(22,83)

	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = Speed;

	bullet.shapeColor=color(white);


  
  	wall=createSprite(1200,200, Thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  if (hasCollided(bullet,wall));
	{
		bullet.velocityX=0;
	  damage=(0.5*Weight*Speed*Speed/Thickness*Thickness*Thickness)
	if(damage>10)
	{
		wall.shapeColor="red";
	}

	if(deformation<10)
	{
		wall.shapeColor="green";
	}
  }  
}
  drawSprites();
 
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLegtEdge=lwall.x;
if(bulletRightEdge>=wallLegtEdge)
{
	return true;
}
return false;

}


