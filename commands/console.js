module.exports = {
	name: 'console',
	description: 'Supprimer les messages de la console',
	guildOnly: true,
	execute(message, args) {
        message.delete().catch(O_o=>{});
        console.clear()
	},
};