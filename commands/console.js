module.exports = {
	name: 'console-clear',
	description: 'Supprime les messages de la console',
	guildOnly: true,
	execute(message, args) {
        message.delete()
        console.clear()
	},
};