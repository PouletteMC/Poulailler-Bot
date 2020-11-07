const id = require('../config.json');
let admin = id.admin;
module.exports = {
	name: 'region',
	description: 'Change la région',
	guildOnly: true,
	execute(message, args) {

		if (!args.length) {

			return message.channel.send("Cette région n'éxiste pas. Les régions valides sont: amsterdam, india, southafrica, london, us-east, us-west, us-central, south-korea, russia, eu-central, sydney, brazil, eu-west, europ, us-south, hongkong, singapour, frankfurt, dubai, japan")

		}

		else {const region = args.shift().toLowerCase()

		message.delete().catch(O_o=>{})
		console.clear()
        message.guild.setRegion(region)
			.then(console.log("L'allocation du serveur a changé !"), message.channel.send('Le serveur a été déplacé en ' + region))
			.catch(console.error);
		} 
	},
};