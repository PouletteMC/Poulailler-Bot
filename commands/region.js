const id = require('../config.json');
let admin = id.admin;
const guild = new Discord.Guild(client, data);

module.exports = {
	name: 'ping',
	description: 'Ping!',
	guildOnly: true,
	execute(message) {

        message.delete().catch(O_o=>{})
        guild.setRegion('london')
            .then(updated => console.log(`Updated guild region to ${updated.region}`))
            .catch(console.error);
	},
};