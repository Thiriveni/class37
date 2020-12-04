var  database;

var gameState=0;
var form,player,game;

var playerCount;


function setup(){
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
  
  createCanvas(windowWidth,windowHeight);

  
}

function draw(){
  if(playerCount===4){
      game.update(1);
  }

  if(gameState===1){
    game.play();
    
  }
 
}

