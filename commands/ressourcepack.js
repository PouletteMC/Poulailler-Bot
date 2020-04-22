const id = require('../config.json');
let membre = id.membre;
const { Client, MessageAttachment } = require('discord.js');
module.exports = {
	name: 'ressourcepack',
	description: 'Envoie le ressourcepack',
	aliases: ['rp', 'ressource'],
	guildOnly: true,
	execute(message, args) {

	if (message.member.roles.cache.has(membre)){
		message.delete().catch(O_o=>{});
		const attachment = new MessageAttachment('./FuturaVolaille.zip');
		message.member.send(attachment)
		console.log(`RessourcePack envoyé à ${message.author.username}`);

    }else{
        message.delete().catch(O_o=>{});
        message.reply('Cette commande est réservés aux Admins.')
        console.log(`${message.author.username} a tenté d'utiliser la commande ${command.name}`)
		}
	},
};