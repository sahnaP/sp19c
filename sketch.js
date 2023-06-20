var player, playerImg;
var badImg,badGroup,bad1,bad2,bad3,bad4,bad5,bad6,bad7,bad8,bad9;
var dog,dogImg;
var bullet1,bullet2;
var count=0;
var enemyCount = 0;
var lives=10;
var bulletsGroup;
var gamestate="PLAY";
var loseimg;

function preload(){
  playerImg= loadImage("ufio (1).png");
  badImg= loadImage("bad.png");
  dogImg= loadImage("dog (1).png");
  loseimg=loadImage("lose.jpg")
}


function setup() {
  createCanvas(800, 800);

  player=createSprite(400,700,70,70);
  player.addImage(playerImg);

  bad1=createSprite(400,280,70,70);
  bad2=createSprite(400,180,70,70);
  bad3=createSprite(290,180,70,70);
  bad4=createSprite(510,180,70,70);
  bad5=createSprite(180,80,70,70);
  bad6=createSprite(290,80,70,70);
  bad7=createSprite(400,80,70,70);
  bad8=createSprite(510,80,70,70);
  bad9=createSprite(620,80,70,70);
  
  bad1.addImage(badImg);
  bad2.addImage(badImg);
  bad3.addImage(badImg);
  bad4.addImage(badImg);
  bad5.addImage(badImg);
  bad6.addImage(badImg);
  bad7.addImage(badImg);
  bad8.addImage(badImg);
  bad9.addImage(badImg);

  badGroup = createGroup();
  badGroup.add(bad1,bad2,bad3,bad4,bad5,bad6,bad7,bad8,bad9);
  
  bulletsGroup = createGroup();
 
  
}

function draw() {

  Move();
  if(gamestate=="PLAY"){
    background("black");
    text("lives:"+lives,50,50);
    shoot();
    badShoots();
    drawSprites();

  }
  else if(gamestate=="LOSE"){
  background(loseimg);
  }
  lose();
  console.log(gamestate)
}

function Move(){
  if(keyDown("right")) {
    player.velocityX=7;
  }
  if(keyDown("left")) {
    player.velocityX=-7;0
  }
  if(player.x>800 || player.x <0){
    player.velocityX=-(player.velocityX);
  }
}

function shoot(){
  if(count>20){
    count=0;
    bullet1=createSprite(player.x,player.y,5,10);
    bullet1.velocityY=-10 ;
    bullet1.shapeColor = rgb(3, 252, 194); 
}

 count=count+1;
 //console.log(count);
}

function badShoots(){
  if(enemyCount > 20) {
    x = Math.round(Math.random() * 8);
    if(x == 0) {
      bullet2 = createSprite(bad1.x, bad1.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);
    }
    if(x == 1) {
      bullet2 = createSprite(bad2.x, bad2.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

     
    }
    if(x == 2) {
      bullet2 = createSprite(bad3.x, bad3.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    if(x == 3) {
      bullet2 = createSprite(bad4.x, bad4.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    if(x == 4) {
      bullet2 = createSprite(bad5.x, bad5.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    if(x == 5) {
      bullet2 = createSprite(bad6.x, bad6.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    if(x == 6) {
      bullet2 = createSprite(bad7.x, bad7.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    if(x == 7) {
      bullet2 = createSprite(bad8.x, bad8.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    if(x == 8) {
      bullet2 = createSprite(bad9.x, bad9.y, 5, 10);
      bullet2.velocityY=10 ;
      bullet2.shapeColor = rgb(162, 3, 255);
      bulletsGroup.add(bullet2);

    }
    enemyCount = 0
  }
  enemyCount += 1
for(i=0;i<bulletsGroup.length;i++){
if(bulletsGroup[i].isTouching(player)){
  lives -=1;
  bulletsGroup[i].destroy()
}
}
}

function lose(){
  if(lives<=0){
   gamestate="LOSE";
   textSize(30)
   fill("white")
   text("press enter to restart",250,750);
   if(keyDown("enter")){
    gamestate="PLAY";
    lives=10;
   }
  }
}