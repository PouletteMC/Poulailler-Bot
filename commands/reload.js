const id = require('../config.json');
let admin = id.admin;
module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {

		
		if(message.member.roles.cache.has(admin)){

		if (!args.length) return message.channel.send(`${message.author} tu n'as pas précisé la commande à recharger !`);
		
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
		|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command)
	return message.channel.send(`${message.author} la commande\`${commandName}\` n'existe pas...`);
	delete require.cache[require.resolve(`./${command.name}.js`)];

try {
	const newCommand = require(`./${command.name}.js`);
	message.client.commands.set(newCommand.name, newCommand);
	message.channel.send(`La commande \`${command.name}\` a été rechargée!`);


} catch (error) {

	console.log(error);
    message.channel.send(`Une erreur est survenue pendant le reload de  \`${command.name}\`:\n\`${error.message}\``);
			}

		}else{
			message.delete().catch(O_o=>{});
			message.reply('Cette commande est réservés aux Admins.')
			console.log(`${message.author.username} a tenté d'utiliser la commande ${command.name}`)
		}

    },
};