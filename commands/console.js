module.exports = {
	name: 'console-clear',
	description: 'Supprimer les messages de la console',
	guildOnly: true,
	execute(message, args) {
        message.delete()
        console.clear()
	},
};