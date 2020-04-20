module.exports = {
	name: 'ping',
	description: 'Ping!',
	guildOnly: true,
	execute(message, args) {
		message.delete()
		message.channel.send('Le bot est en ligne')
		console.log(`${message.author.username} nous demande !`);
	},
};