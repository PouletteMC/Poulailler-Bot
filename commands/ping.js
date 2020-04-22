module.exports = {
	name: 'ping',
	description: 'Ping!',
	guildOnly: true,
	execute(message, args) {
		message.delete().catch(O_o=>{});
		message.channel.send("Pinging ...")
			.then((msg) => {
				msg.edit(`Ping: ${Date.now() - msg.createdTimestamp}`)
		})
	},
};