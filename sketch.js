const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var bin, binImg;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();


    bin = createSprite(960, 520, 20, 20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(900, 500, 10, 120);
    binPart2 = new Dustbin(960, 560, 130, 10);
    binPart3 = new Dustbin(1020, 500, 10, 120);


 
}

function draw(){
    background(0);
    Engine.update(engine);

    
    ground.display();
    crumpledPaper.display();
    //bin.display();
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x:75,y:-75});
    }
}
