const id = require('../config.json');
let admin = id.admin;
module.exports = {
	name: 'region',
	description: 'Change la région',
	guildOnly: true,
	execute(message, args) {

		const region = args.shift().toLowerCase()

		if (!args.length) {

			return message.channel.send("Cette région n'éxiste pas. Les régions valides sont: amsterdam, india, southafrica, london, us-east, us-west, us-central, south-korea, russia, eu-central, sydney, brazil, eu-west, europ, us-south, hongkong, singapour, frankfurt, dubai, japan")

		}

		if (args[1] === 'cycle') {
			message.delete().catch(O_o=>{})
			message.guil.setRegion('london')
			.then(message.guild.setRegion('eu-west'))
			.then(console.log("Cycle de région terminé !"), message.channel.send("Cycle terminé, si le problème persiste vérifies sur https://discordstatus.com/ "))
		}

		else {
			message.delete().catch(O_o=>{})
        	message.guild.setRegion(region)
			.then(console.log("L'allocation du serveur a changé !"), message.channel.send('Le serveur a été déplacé en ${region}'))
			.catch(console.error);
		} 
	},
};