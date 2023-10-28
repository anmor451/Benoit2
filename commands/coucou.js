module.exports = {
    name: 'coucou',
    description: 'dire yo',
    execute(message, args){
        message.channel.send('hey!');
    }
}