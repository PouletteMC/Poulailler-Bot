const id = require('../config.json');
let admin = id.admin;

module.exports = {
	name: 'region',
	description: 'Change la région',
	guildOnly: true,
	execute(message) {

	if (message.member.roles.cache.has(admin)){
		const args = message.content.slice(prefix.length).trim().split(' ');
		const region = args.shift().toLowerCase();

        message.delete().catch(O_o=>{})
        message.guild.setRegion(region)
			.then(console.log("L'allocation du serveur a changé !"), message.channel.send('Le serveur a été déplacé.'))
			.catch(console.error);
		} 
	else { console.log('it broke my dude')}
	},
};