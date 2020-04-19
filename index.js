const fs = require('fs');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('ready', () => {
  console.log(`${client.user.tag} est en ligne !`)
  client.user.setActivity("Chicken simulator 2020", { type: "PLAYING"});
});


client.on('guildMemberAdd', member => {
    console.log('Un utilisateur a rejoint le serveur')
    var channel = member.guild.channels.cache.find(channel => channel.id == "701427875416506409");
    channel.send(`${member} a rejoint le serveur. Nous sommes désormais ${channel.guild.MemberCount} !`)
    var Role = member.guild.roles.cache.find(role => role.id == "700818937071403099");
    member.roles.add(Role,"Reason");
    member.send(`Bienvenue sur le serveur !\n \nNotre Discord à pour but de vous communiquer des informations sur les événements et chagements à venir.\nIl met aussi en relation les joueurs et les différentes équipes !\nTu as accès à quelques commandes :\n          - Tape !ressourcepack, !rp ou !ressource pour recevoir le ressourcepack du serveur !\n          - Tape !info pour voir quelques informations à propos du discord\n          - Tape !ping pour voir si le bot est en ligne !\n \nMerci de nous avoir rejoints et bon jeux !`)
  });

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('Impossible de réaliser cette action en DM');
    }

    if (command.args && !args.length) {
        let reply = 'Il manque des informations';

        if (command.usage) {
            reply += `\nUne bonne utilisation de cette commande serait : \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationYime = timestamps.get(message.author.if) + cooldownAmount;

    if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`Attends encore ${timeLeft.toFixed(1)} seconde(s) avant de pouvoir utiliser \`${command.name}\` à nouveau}`);
        }
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Je ne reconnais pas cette commande');
    }
});

client.login(token);