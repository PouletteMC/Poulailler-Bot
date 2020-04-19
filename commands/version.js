const del = (1);
module.exports = {
	name: 'version',
	description: 'version du bot',
	execute(message, args) {
		message.channel.bulkDelete(del)
		message.channel.send('Bot Poulailler V1.0')
	},
};