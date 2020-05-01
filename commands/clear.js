const id = require('../config.json');
let admin = id.admin;
const cls = (100)
module.exports = {
	name: 'clear',
	cooldown: 5,
	aliases: ['cls'],
	description: 'Clear !',
	guildOnly: true,
	execute(message) {

		if(message.member.roles.cache.has(admin)){
			message.channel.bulkDelete(cls).catch(O_o=>{});
			message.channel.bulkDelete(cls).catch(O_o=>{});
			message.channel.bulkDelete(cls).catch(O_o=>{});
			message.channel.bulkDelete(cls).catch(O_o=>{});
			message.channel.bulkDelete(cls).catch(O_o=>{});
			console.log('Les messages ont été supprimés')
		}
		else {
			message.delete().catch(O_o=>{});
			message.reply('Cette commande est réservés aux Admins.')
			console.log(`${message.author.username} a tenté d'utiliser la commande clear`)
	  }
	},
};