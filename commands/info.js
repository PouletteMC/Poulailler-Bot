const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
module.exports = {
	name: 'info',
	cooldown: 5,
	description: `Si tu souhaite des informations supplémentaires sur le serveur, le bot ou même sur toi :wink:`,
    args: true,
    usage: '<user ou server ou bot>',
	execute(message, args) {
		message.delete()
		if (args[0] === 'bot') {
			const embed = new MessageEmbed()
			.setColor('#10ff00')
			.setTitle('Bot Poulailler')
			.setThumbnail('https://imgur.com/Evl0sWq')
			.setFooter('Par PouletteMC · Version 1.1')
			message.member.send(embed)
			console.log(`${message.author.username} a demandé les infos du bot`)
		}
		else if (args[0] === 'serveur') {
			message.member.send(`**Nom du serveur :** ${message.guild.name}\n**Membres :** ${message.guild.memberCount}\n**Date de création :** ${message.guild.createdAt}\n**Région :** ${message.guild.region}`)
			console.log(`Les infos du serveur ont été envoyées à ${message.author.username}`);
		}
		else if (args[0] === 'user') {
			message.member.send(`**Nom d'utilisateur :** ${message.author.username}\n**Identifiant :** ${message.author.id}`)
			console.log(`${message.author.username} à demandé ses informations`);
		} else {
			message.member.send('Il manque des arguments...')
		}
	},
};