class Form{
    constructor(){}

    display(){
        var title = createElement('h2')
        title.html("Car - racing game")
        title.position(200,0)
        var input = createInput("")
        input.position(200,150)
        var button = createButton('Start')
        var greeting = createElement('h3')
        button.position(200,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Welcome!" + name)
            greeting.position(200,200)
            
        })
    }

}