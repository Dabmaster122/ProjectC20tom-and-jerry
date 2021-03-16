var tom;
var jerry;
var background;

function preload() {
   bg = loadImage("images/garden.png");
   cat = loadAnimation("images/cat1.png");
   cat1 = loadAnimation("images/cat2.png","images/cat3.png");
   cat2 = loadAnimation("imgaes/cat4.png");
   mouse = loadAnimation("imges/mouse1.png");
   mouse1 = loadAnimation("images/mouse2.png","images/mouse3.png");
   mouse2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600);
    jerry = createSprite(200,600);
    tom.addAnimation("catready",cat);
    tom.scale = 0.2;

    jerry.addAnimation("mouseready",mouse);
    jerry.scale = 0.15

}

function draw() {

    background(bg);
    if(tom.x - jerry.x < (tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("catdone",cat2);
        tom.changeAnimation("catdone");
        tom.scale = 0.2;

        jerry.addAnimation("mousedone",mouse2);
        jerrry.changeAnimation("mousedone")
    }
    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -2;
      tom.addAnimation("catwalk",cat1);
      tom.changeAnimation("catwalk");

      jerry.addAnimation("mousewalk",mouse1);
      jerry.changeAnimation("mousewalk");
  }


}
