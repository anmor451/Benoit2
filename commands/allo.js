module.exports = {
    name: 'allo',
    description: 'dire bonjour',
    execute(message, args){
        message.channel.send('coucou!');
    }
}