module.exports = {
    name: 'payphone',
    description: 'sex',
    execute(message, args){
        var chance = Math.floor(Math.random() * 1);
        if (chance == 0){
        message.channel.send('OMG CEST MA CHANSON PREF!!!');
        } else message.channel.send('IM AT A PAAAAAAYPHONE');
    }
}