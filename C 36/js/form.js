class Form{
    constructor(){

    }

    //DOM = Domcument Object Modelling
    // input, button, element(title/ greeting)
    //sprite --> createSprite
    //var ball = createSprite()
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130,0);

        var greeting = createElement('h3');

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Submit");
        button.position(250,200);

        button.mousePressed(function(){
            //hide the input & button --> hide()
            input.hide();
            button.hide();

            //create a vble called 'name' to store the name typed in the input box
            var name = input.value();

            //playerCount is increase
            playerCount+=1;

            //update the name of the player
             player.update(name);
            
            //update the increased playerCount
            player.updateCount(playerCount);

            //greet the player "hello player's name"
            greeting.html("Hello " + name);
            greeting.position(130,160);
        })

    }
}


