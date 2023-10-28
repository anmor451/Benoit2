module.exports = {
    name: 'charles',
    description: 'charles',
    execute(message, args){
        var chance = Math.floor(Math.random() * 50);
        if (chance == 0){
        message.channel.send('ok cest pas vrai que je laime pas charles... dans le fond cest crm un chic type ;)');
        } else message.channel.send('ARK!!! bof je lui parle juste parce que cest lami de seb et que je veux pas lui faire de peine');
    }
}

