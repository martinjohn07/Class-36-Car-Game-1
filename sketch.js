var database
var player,form,game
var gameState=0,playerCount


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game()

  game.getState()
  game.start()
 }