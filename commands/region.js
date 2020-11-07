const id = require('../config.json');
let admin = id.admin;

module.exports = {
	name: 'region',
	description: 'Change la région',
	guildOnly: true,
	execute(message) {

		if (message.member.roles.cache.has(admin)){

        message.delete().catch(O_o=>{})
        guild.setRegion('london')
            .then(updated => console.log(`Updated guild region to ${updated.region}`))
			.catch(console.error);
		} else { console.log('it broke my dude')}
	},
};