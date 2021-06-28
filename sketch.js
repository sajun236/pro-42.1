var iss,spacecraft,hasDocked

function preload(){
  bg=loadImage("../Docking-undocking/spacebg.jpg");
  iss_image=loadImage("../Docking-undocking/iss.png");
  scimg1=loadImage("../Docking-undocking/spacecraft1.png");
  scimg2=loadImage("../Docking-undocking/spacecraft2.png");
  scimg3=loadImage("../Docking-undocking/spacecraft3.png");
  scimg4=loadImage("../Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1500,800);
  iss=createSprite(800, 290, 50, 50);
  iss.addImage(iss_image)

  spacecraft=createSprite(800,500,50,50)
  spacecraft.addImage(scimg1);
  spacecraft.scale=0.4
 
} 


function draw() {
  background(bg); 
    if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg4);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg2);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}