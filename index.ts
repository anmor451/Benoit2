import 'dotenv/config'
import { Client, Collection, GatewayIntentBits, Message } from "discord.js";
import fs from 'fs'

const prefix = '';

const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }) as Client & botExtras;
bot.commands = new Collection();

interface command {
    name: string
    description: string
    execute: (msg: Message, args: any[]) => {}
}

type botExtras = {
    commands: Collection<String, command>;
}

const cmdFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js') || f.endsWith('.ts'));
for (const f of cmdFiles) {
    const cmd = require(`./commands/${f}`) as command;
    bot.commands.set(cmd.name, cmd);
}


bot.on('ready', () => {
    console.log("BENOIT SE LEVE");
});

bot.on('messageCreate', async (msg) => {
    if (!msg.content.startsWith(prefix)) return;
    if (msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift()?.toLowerCase();

    const theCmd = bot.commands.findKey(c => c.name == cmd);
    if (theCmd) {
        bot.commands.get(cmd!)!.execute(msg, args);
    }
})

bot.login(process.env.TOKEN);
