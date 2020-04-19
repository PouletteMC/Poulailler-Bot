const { Client, MessageAttachment } = require('discord.js');
module.exports = {
	name: 'ressourcepack',
	description: 'Envoie le ressourcepack',
	aliases: ['rp', 'ressource'],
	guildOnly: true,
	execute(message, args) {

	if (message.member.roles.cache.has("688862435909697536")){
		message.delete()
		const attachment = new MessageAttachment('./FuturaVolaille.zip');
		message.channel.send(attachment)
		console.log(`RessourcePack envoyé à ${message.author.username}`);

	}else {
		message.delete()
		message.reply('Tu ne peux pas utiliser cette commande')
		console.log(`${message.author.username} a tenté d'utiliser une commande`)
		}
	},
};