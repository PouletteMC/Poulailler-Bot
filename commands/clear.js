const id = require('../config.json');
let admin = id.admin;
module.exports = {
	name: 'clear',
	cooldown: 5,
	aliases: ['cls'],
	description: 'Clear !',
	guildOnly: true,
	execute(message, args) {

		if (message.member.roles.cache.has(admin) && !args.length){

			message.channel.bulkDelete('500').catch(O_o=>{})
			.then(console.log(`Tous les messages ont été supprimés`))
			
		}

		if (message.member.roles.cache.has(admin) && args.length) {

			message.channel.bulkDelete(args).catch(O_o=>{})
			.then(console.log(`${args} messages supprimés`))

		}

		else {

			message.delete().catch(O_o=>{})
			message.reply('Cette commande est réservés aux Admins.')
			console.log(`${message.author.username} a tenté d'utiliser la commande clear`)
			
	  }
	},
};