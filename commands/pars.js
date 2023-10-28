module.exports = {
    name: 'pars',
    description: 'degage sale batard',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('Tes pas dans un chat vocal man...');
        await voiceChannel.leave();
        await message.channel.send('OK OK pas besoin de crier je men vais');

    }
}