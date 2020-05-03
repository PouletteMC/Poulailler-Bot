const id = require('../config.json');
let membre = id.membre;
let aide = id.aide;
module.exports = {
	name: 'aide',
    description: 'Envoie une requête au Staff',
    aliases: ['requête, admin, modo'],
    guildOnly: true,
	execute(message, args) {
        
    if (message.member.roles.cache.has(membre)){
        var channel = message.guild.channels.cache.find(channel => channel.id == aide);
        const announceMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        channel.send(`Mesage de ${message.author.username} : \n` + announceMessage);
        console.log('Il y une nouvelle demande !');

    } else {
        message.delete().catch(O_o=>{});
        message.reply('O_o')
        console.log(`${message.author.username} a tenté d'utiliser une commande`)
        }
    }
};