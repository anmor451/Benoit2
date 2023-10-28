module.exports = {
    name: 'non',
    description: 'oui',
    
    execute(message, args){
        var chance = Math.floor(Math.random() * 8);
        if (chance == 0){
        message.channel.send('bril... HAHAHAHAHAHAHA');
        } else if (chance == 1){
            message.channel.send('bril... HAHAHA ta compris cest comme la blague tsé non... bril ça fait nombril XD');
        } else message.channel.send('oui');
    }
}