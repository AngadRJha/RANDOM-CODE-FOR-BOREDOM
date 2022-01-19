
var box
var grp,grp1,edgeGRP
function setup(){
    var canvas = createCanvas(1200,400);
    box=createSprite(mouseX,mouseY,50,50)
    edges()
  
   
   
    edge.shapeColor="white"
    edge1.shapeColor="white"
    edge2.shapeColor="white"
    edge3.shapeColor="white"
    grp=createGroup()
    grp1=createGroup()
    flame1=createGroup()
   
}
 
function draw(){

background("black")

drawSprites()


box.x=mouseX
box.y=mouseY
fill("white")
text(mouseX+" "+mouseY,mouseX,mouseY)

if (keyDown(UP_ARROW)){

createWhiteBlock()
}
if (keyDown(DOWN_ARROW)){
    fill("blue")
    createRedBlock()
    }

grp.bounceOff(edge)
grp.bounceOff(edge1)
grp.bounceOff(edge2)
grp.bounceOff(edge3)
grp.bounceOff(box)
grp.bounceOff(grp1)

grp1.bounceOff(edge)
grp1.bounceOff(edge1)
grp1.bounceOff(edge2)
grp1.bounceOff(edge3)
grp1.bounceOff(box)
flamehm()
        flame1.collide(edge)
        flame1.collide(edge1)
        flame1.collide(edge2)
        flame1.collide(edge3)  
       


}


function createWhiteBlock(){
    if(frameCount%10===0){
        fill("white")
        box111=createSprite(mouseX,mouseY,20,20)
        box111.velocityX=7
        box111.velocityY=7
        box111.bounceOff(edge)
        box111.bounceOff(edge1)
        box111.bounceOff(edge2)
        box111.bounceOff(edge3)
        box111.shapeColor="white"
        grp.add(box111)
    }
   
}
function createRedBlock(){
    if(frameCount%10===0){
        
        box11=createSprite(mouseX,mouseY,20,20)
        box11.velocityX=7
        box11.velocityY=7
        box11.bounceOff(edgeGRP)
      
        box11.shapeColor="blue"
        grp1.add(box11)
    }
   
}

function flamehm(){
    
    for(var i=0;i<grp1.length;i++){
        if (grp1.get(i).isTouching(grp)) {
            flame=createSprite(grp1.get(i).x,grp1.get(i).y,Math.round(random(10,15)),Math.round(random(2,5)))
            flame.velocityY=Math.round(random(5,7))
            flame.velocityX=Math.round(random(-5,5))
            flame.shapeColor= "#ff7301"
            flame1.add(flame)
           }
    }


}
function edges(){
    edge=createSprite(1132,205,10,900)
    edge1=createSprite(648,346,2000,10)
    edge2=createSprite(200,346,10,900)
    edge3=createSprite(648,26,2000,10)
    edgeGRP=createGroup()
    edgeGRP.add(edge)
    edgeGRP.add(edge1)
    edgeGRP.add(edge2)
    edgeGRP.add(edge3)
}
   

