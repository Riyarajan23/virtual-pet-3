//Create variables here
var dogimage,doghappy,dog,foods,foodstock,database,foodobjects,feed,addfood,feedtime,lastfed,livingRoom,garden
function preload()
{
	dogimage=loadImage("images/dogImg.png")
  doghappy=loadImage("images/dogImg1.png")
  room=loadImage("images/Living Room.png")
  garden=loadImage("images/Garden.png")

}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,500,50,50)
  dog.addImage(dogimage);
  dog.scale=0.5
  database=firebase.database()
  foodstock=database.ref('Food')
  foodstock.on("value",readstock)
  feed=createButton("Feed The Dog")
  feed.position(400,90)
  feed.mousePressed(feedDog)
  addFood=createButton("Add Food")
  addFood.position(500,90)
  addFood.mousePressed(addFood)
  foodobject=new Food ()
}


function draw() {  
background(46,139,87);
currentTime=hour()
feedDog.mousePressed(background(garden))
if (currentTime===feedtime){
background(garden)
}
  drawSprites();
  //add styles here

if (keyWentDown(UP_ARROW)){
  currentTime=feedtime
  dog.addImage(doghappy)
  rightstock(foods)
}
if (keyWentUp(UP_ARROW)){
 
  dog.addImage(dogimage)
}
textSize(30)
text("Food Remaining:"+foods,300,250)
text("Press UP Arrow to Feed The Dog",250,150)
foodobject.display()
}

function readstock(data){
  foods=data.val()
}
function rightstock(x){
  if (x<=0){
    x=0
  }else {
    x=x-1
  }
}
function feedDog (){
  dog.addImage(doghappy)
  foodobject.updatefoodstock (foodobject)
  
}

function addFood(){
  foodstock++;
  database.ref('/').update({Food:foodstock,feedtime:hour()})
}