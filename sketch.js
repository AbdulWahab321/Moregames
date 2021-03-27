
var space
function preload(){
ShImg=loadImage("2.png")


}
function setup(){
    createCanvas(500,500)
space=createSprite(200,150,100,100)
space.addImage(ShImg)
space.scale=0.1

}
function draw(){
background("pink")
fill("white")
textSize(30)
text("Space Shooter",120,space.y+100);
if(frameCount%10===0){
if(mousePressedOver(space)){
    open("https://abdulwahab321.github.io/Space_Shooter-The-LATEST/");
}
}
drawSprites();

}