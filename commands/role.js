const del = (1);
module.exports = {
	name: 'role',
	cooldown: 5,
	description: 'Donner un role à un utilisateur - incomplet',
	guildOnly: true,
    args: true,
    usage: '<user> <role>',
	execute(message, args) {
		message.channel.bulkDelete(del)
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`)
		console.log('rôle donné');
	},
};