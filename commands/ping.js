module.exports = {
	name: 'ping',
	description: 'Vérifie si le bot répond bien aux commandes',
	guildOnly: true,
	execute(message, args) {
		message.delete()
		message.channel.send('Le bot est en ligne')
		console.log(`${message.author.username} nous demande !`);
	},
};