var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  num1=createInput()
  num1.position(35,25)
  num2=createInput()
  num2.position(35,70)

}

function draw() 
{
  
   background(30);
   text(mouseX+','+mouseY,mouseX,mouseY)
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




