var database;
var gameState = 0;
var playerCount;
var form,player,game;       //objects of the classes\

function setup(){
  createCanvas(400,400);
  
  //firebase.database();
  database = firebase.database();

  //create the game object for the Game class
  game = new Game();

  //get/read the gameState
  game.getState();

  //start the game
  game.start();
}

function draw(){

}

