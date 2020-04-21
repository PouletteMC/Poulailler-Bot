const roles = require('./roles.json');
let membre = roles.membre;
const { Client, MessageAttachment } = require('discord.js');
module.exports = {
	name: 'ressourcepack',
	description: 'Envoie le ressourcepack',
	aliases: ['rp', 'ressource'],
	guildOnly: true,
	execute(message, args) {

	if (message.member.roles.cache.has(membre)){
		message.delete()
		const attachment = new MessageAttachment('./FuturaVolaille.zip');
		message.member.send(attachment)
		console.log(`RessourcePack envoyé à ${message.author.username}`);

	}else {
		message.delete()
		message.reply('Tu ne peux pas utiliser cette commande')
		console.log(`${message.author.username} a tenté d'utiliser une commande`)
		}
	},
};