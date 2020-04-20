const roles = require('./roles.json');
let admin = roles.admin;
const cls = (100)
module.exports = {
	name: 'clear',
	cooldown: 5,
	aliases: ['cls'],
	description: 'Clear !',
	guildOnly: true,
	execute(message) {
		if(message.member.roles.cache.has(admin)){
			message.channel.bulkDelete(cls)
			message.channel.bulkDelete(cls)
			message.channel.bulkDelete(cls)
			message.channel.bulkDelete(cls)
			message.channel.bulkDelete(cls)
			console.log('Les messages ont été supprimés')
			
		} else {
			message.delete()
			message.reply('Tu ne peux pas utiliser cette commande')
			console.log(`${message.author.username} a tenté d'utiliser une commande`)
		  }
	},
};