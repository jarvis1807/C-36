var gameState = 0 
var playerCount, database, form, player, gameState

function setup(){
    createCanvas(400,400)
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    
}