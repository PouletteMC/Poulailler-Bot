const id = require('../config.json');
let admin = id.admin;
const cls = (100)
module.exports = {
	name: 'fetch',
	cooldown: 5,
	aliases: ['cls'],
	description: 'Clear !',
	guildOnly: true,
	execute(message) {

		if(message.member.roles.cache.has(admin)){
            message.channel.cache.get('765330121376268308-777819113178791947').send(message.content).catch(console.error)
		}
		else {
			message.delete().catch(O_o=>{});
			message.reply('Cette commande est réservés aux Admins.')
			console.log(`${message.author.username} a tenté d'utiliser la commande clear`)
	  }
	},
};