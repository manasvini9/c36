/*
1. read/get the gameState --> getState()
2. update the gameState --> update(state)
3. start the game acc to the gameState --> start()
*/

class Game{
    constructor(){
        
    }

    getState(){
     var gameStateRef = database.ref('gameState');
     gameStateRef.on("value",function(data){
         gameState = data.val();
     })
    }

    update(state){
     database.ref('/').update({
         gameState: state 
     })
    }

    start(){
        //what should happen if the gameState = 0
        if(gameState === 0){
            //a new player object (player) is created for the Player class
            player = new Player();

            //read/ get the player Count
            player.getCount();

            //new form object is created from the Form class
            form = new Form();

            //displaying the form to the player
            form.display();
        }
    }
}
//class Box 
//box1, box2, 
//box1 = new Box()