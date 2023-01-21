var paquito;
var paquito_running;
var backgroundImg;
var ground,invisibleGround,groundImage;
//var groundImage;

function preload(){
    backgroundImg = loadImage("cueva1.jpg");
    paquito_running = loadAnimation("perro1.png","perro2.png","perro3.png","perro4.png","perro5.png","perro6.png");
    groundImage = loadImage("groundsn.png");
}

function setup(){
    createCanvas(600,600);
    //createCanvas(windowWidth, windowHeight);
    paquito = createSprite(50,510,20,50);
    paquito.addAnimation("running",paquito_running);
    paquito.scale = 0.25;

    //invisibleGround = createSprite(width/2,height-10,width,250);
    //invisibleGround.visible = false;
    //invisibleGround.shapeColor = "#f4cbaa";

    ground = createSprite(200,470,400,20);
    //ground = createSprite(width/2,height,width,2);
    ground.addImage("ground",groundImage);
    ground.x = ground.width/2;
    //ground.velocityX = -(6+3*score/100);
}

function draw(){
    background(backgroundImg);

    ground.velocityX = -1.5;

    if(ground.x<290){
        ground.x = ground.width/2;
    }

    if(keyDown(RIGHT_ARROW)){
        paquito.x = paquito.x + 2.5;
    }
    if(keyDown(LEFT_ARROW)){
        paquito.x = paquito.x - 2.5;
    }
    if(keyDown(UP_ARROW)){
        paquito.velocityY = -10;
    }

    paquito.velocityY = paquito.velocityY+0.8;

    paquito.collide(ground);

    
    drawSprites();
}