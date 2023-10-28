module.exports = {
    name: 'viens',
    description: 'benoit arrive',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Tes même pas dans un salon vocal gros tas');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        

     voiceChannel.join();

    }
}