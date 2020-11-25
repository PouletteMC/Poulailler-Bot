const id = require('../config.json');
let membre = id.membre;
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'site',
	description: 'Envoie le lien du site',
	aliases: ['web', 'website'],
	guildOnly: true,
	execute(message, args) {

	if (message.member.roles.cache.has(membre)){
        message.delete().catch(O_o=>{});
        message.channel.send(`https://www.poulettemc.fr`)
        console.log(`Lien du site envoyé à ${message.author.username}`);

    } else {
        message.delete().catch(O_o=>{});
        message.reply('Cette commande est réservés aux Membres.')
        console.log(`${message.author.username} a tenté d'utiliser la commande ${command.name}`)
		}
	},
};