module.exports = {
    name: 'clear',
    description: 'effacer des messages',
    async execute(message, args) {
       if(!args[0]) return message.reply('Il faut que je supprime combien de message gros tas?');
       if(isNaN(args[0])) return message.reply('INSÈRE UN CHIFFRE TATA');

       if(args[0] > 100) return message.reply('Ça fait beaucoup là non?');
       if(args[0] < 1) return message.reply('Tu dois au moins supprimer 1 message');

       await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
       });
    }
}