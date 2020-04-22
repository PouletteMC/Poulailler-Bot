const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const id = require('../config.json');
let admin = id.admin;
let acmd = id.AdminCommands
let mcmd = id.MemberCommands
let icon = id.icon;
const { prefix } = require('../config.json');
module.exports = {
    name: 'test',
    description: 'Liste des commandes',
    execute(message, args){
        message.delete().catch(O_o=>{});
        const data = [];
        const { commands } = message.client;

        if(message.member.roles.cache.has(admin)){

            if (!args.length) {
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Voici la liste de mes commandes !')
                    .setDescription(`Pour plus d'informations sur une commande tapes ${prefix}help <nom de la commande>`)
                    .setThumbnail(icon)
                    .addField("**Commandes :**", acmd)
                    .setFooter('Par PouletteMC', 'https://github.com/PouletteMC/Poulailler-Bot')
                return message.author.send(embed)
                    .then(() => {
                        if (message.channel.type ==='dm') return;
                        message.reply('Tu as reçu les commandes en DM');
                    })
                    .catch(error => {
                        console.error(`Impossible d'envoyer un DM à ${message.author.tag}.\n`, error);
                        message.reply(`Impossible de t'envoyer un DM, vérifie que tu ne les as pas désactivés`);
                    })
                }
                
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply(`Cette commande n'existe pas !`);
                
            }
            
            data.push(`**Nom:** ${command.name}`);
            if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.usage) data.push(`**Utilisation:** ${prefix}${command.name} ${command.usage}`);
            data.push(`**Cooldown:** ${command.cooldown || 0} seconde(s)`);
            message.delete().catch(O_o=>{});
            message.channel.send(data, { split: true });

        } else {
            const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Voici la liste de mes commandes !')
            .setDescription(`Pour plus d'informations sur une commande tapes ${prefix}help <nom de la commande>`)
            .setThumbnail(icon)
            .addField("**Commandes :**", mcmd)
            .setFooter('Par PouletteMC', 'https://github.com/PouletteMC/Poulailler-Bot')
        return message.author.send(embed)
            .then(() => {
                if (message.channel.type ==='dm') return;
                message.reply('Tu as reçu les commandes en DM');
            })
            .catch(error => {
                console.error(`Impossible d'envoyer un DM à ${message.author.tag}.\n`, error);
                message.reply(`Impossible de t'envoyer un DM, vérifie que tu ne les as pas désactivés`);
            })
        }
        
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
        return message.reply(`Cette commande n'existe pas !`);
        
    }
    
    data.push(`**Nom:** ${command.name}`);
    if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.usage) data.push(`**Utilisation:** ${prefix}${command.name} ${command.usage}`);
    data.push(`**Cooldown:** ${command.cooldown || 0} seconde(s)`);
    message.delete().catch(O_o=>{});
    message.channel.send(data, { split: true });
    }
};