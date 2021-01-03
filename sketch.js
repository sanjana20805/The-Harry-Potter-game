var canvas, backgroundImage;

var gameState = "start"


var form, backgroundImage;

var space, spaceImg, harry, harryImg, enemy1, enemy2;

var score=0;



function preload(){
  backgroundImage = loadImage("images/background.png")
  spaceImg = loadImage("images/space.png")
  harryImg = loadImage("images/harry.png")
  
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  space=createSprite(width/2, height/2)
  space.addImage(spaceImg)

  harry = createSprite(width/2, height - 200)
  harry.addImage(harryImg)
  harry.scale = 0.7
 
  form = new Form();
  
  
}


function draw(){
  
  if(gameState === "start"){
    form.display();
    
  }

  if(gameState==="play"){
    harry.x=mouseX;
    
    drawSprites();
  }
  
}
