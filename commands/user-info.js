module.exports = {
	name: 'user-info',
	description: "Informations de l'utilisateur",
	execute(message, args) {
		message.delete().catch(O_o=>{});
		message.channel.send(`Username : ${message.author.username}\nIdentifiant : ${message.author.id}`)
		console.log('Infos remises');
	},
};