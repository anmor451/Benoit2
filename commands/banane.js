module.exports = {
    name: 'banane',
    description: 'montrer une banane',
    execute(message, args){
        message.channel.send('https://media.lactualite.com/2014/08/banane.jpg');
    }
}