/*
1. Read/ get the no. of players --> getCount()
2. update the playerCount --> updateCount(count)
3. update the player's name --> update(name)
*/

//refer, listen, storing(variable)

class Player{
    constructor(){
    }
        getCount(){
            var playerCountRef = database.ref('playerCount');           //refer
            playerCountRef.on("value",function(data){                   //listen
            playerCount = data.val();                                   //store
            }) 
        }

        updateCount(count){
            database.ref('/').update({
                playerCount: count
            })
        }
//x = player1,player2,player3,player4 --> "player" + playerCount
        update(name){
            var playerIndex = "player" + playerCount;
            database.ref(playerIndex).set({
                name: name
            })
        }
    
}

//playerCount: 0 --> update
//player1: " "  --> set

