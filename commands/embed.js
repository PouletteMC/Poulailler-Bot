const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
module.exports = {
	name: 'embed',
	description: 'test embed',
	guildOnly: true,
	execute(message, args) {
		message.delete().catch(O_o=>{});
		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Some title')
		.setURL('https://discord.js.org/')
		.setAuthor('Some name 1', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/wSTFkRM.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here2' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here3', inline: true },
			{ name: 'Inline field title', value: 'Some value here3', inline: true },
		)
		.addField('Inline field title', 'Some value here5', true)
		.setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
		message.channel.send(embed)
		console.log('Embed envoyé');
	},
};