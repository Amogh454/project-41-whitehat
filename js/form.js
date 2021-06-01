class Form{
    constructor(){
       this.input = createInput('');
       this.input.attribute('placeholder','Your name to be displayed  ')
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.reset = createButton('Reset');
       this.greeting1 = createElement('h3');
       this.greeting2 = createElement('h4');
    }
    hide() {
        this.greeting.hide();
        this.greeting1.hide();
        this.greeting2.hide();
        this.button.hide();
        this.input.hide();
     
    }
    display() {

        this.input.position(250,450);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(250,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(540,350);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
            //this.greeting.style('background-color', 'black');
            this.greeting1.html(player.name + "   waiting for another player to join the game" )
            this.greeting1.position(350,450);
            this.greeting1.style('color', 'white');
            this.greeting1.style('font-size', '30px');
           // this.greeting1.style('background-color', 'black');
           this.greeting2.html(player.name + "   can you please press F11 before the game starts" )
           this.greeting2.position(320,500);
           this.greeting2.style('color', 'white');
           this.greeting2.style('font-size', '30px');

          start.visible  = false;
           
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
           
            
            
        });

    }
}