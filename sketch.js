var ball;
var database;
var position;
var hypnoticBall;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
     hypnoticBall = database.ref('ball/position')
    hypnoticBall.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        readPosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        readPosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        readPosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        readPosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
