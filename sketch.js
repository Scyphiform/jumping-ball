var canvas;
var edges;
var music;
var box1,box2,box3,box4,ball1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(0,580,360,30)
    box1.shapeColor = rgb(0,0,255)
    box2 = createSprite(295,580,200,30)
    box2.shapeColor = rgb(255,128,25)
    box3 = createSprite(518,580,200,30)
    box3.shapeColor = rgb(22,99,124)
    box4 = createSprite(740,580,220,30)
    box4.shapeColor = rgb(0,0,255)

    ball1 = createSprite(random(50,750),580,40,40)
    ball1.velocityX = 4;
    ball1.velocityY = 9;

    edges = createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    ball1.bounceOff(edges);

    if(ball1.isTouching(box1) && ball1.bounceOff(box1)){
        ball1.shapeColor = rgb(0,0,255)
    }
    if(ball1.isTouching(box2) && ball1.bounceOff(box2)){
        ball1.shapeColor = rgb(255,128,25)
    }
    if(ball1.isTouching(box3) && ball1.bounceOff(box3)){
        ball1.shapeColor = rgb(22,99,124)
        music.play();
    }
    if(ball1.isTouching(box4) && ball1.bounceOff(box4)){
        ball1.shapeColor = rgb(0,0,255)
    }

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ball1.display();

    //add condition to check if box touching surface and make it box
}
