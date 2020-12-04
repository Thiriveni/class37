class Game{
    constructor(){

    }

    getState(){
        var getstateRef=database.ref("gameState");
        getstateRef.on("value", function(data){
            gameState=data.val();
        })

    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            
            player=new Player();
            var playercountRef=await database.ref("playerCount");
          playercountRef.once("value");
          if(playercountRef.exists){
              playerCount=playercountRef.val();
              player.getCount();
          }
          form=new Form();
            form.display();
        }
       
    }

    play(){
        form.hide();
    }
}

