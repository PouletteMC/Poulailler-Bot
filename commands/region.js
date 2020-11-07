const id = require('../config.json');
let admin = id.admin;

module.exports = {
	name: 'region',
	description: 'Change la région',
	guildOnly: true,
	execute(message) {

		if (message.member.roles.cache.has(admin)){

        message.delete().catch(O_o=>{})
        message.guild.setRegion('london')
			.then(message.guild.setRegion('europe'))
			.then(console.log("L'allocation du serveur a changé !"), message.channel.send('Le serveur a été déplacé.'))
			.catch(console.error);
		} else { console.log('it broke my dude')}
	},
};