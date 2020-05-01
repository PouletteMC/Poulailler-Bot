const id = require('../config.json');
let admin = id.admin;
let annonce = id.annonce;
module.exports = {
	name: 'annonce',
    description: 'Fait dire quelquechose au bot',
    aliases: ['event'],
    guildOnly: true,
	execute(message, args) {
        
    if (message.member.roles.cache.has(admin)){
        var channel = message.guild.channels.cache.find(channel => channel.id == annonce);
        const announceMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        channel.send(announceMessage);
        console.log('Il y u une nouvelle annonce !');

    } else {
        message.delete().catch(O_o=>{});
        message.reply('Cette commande est réservés aux Admins.')
        console.log(`${message.author.username} a tenté d'utiliser une commande`)
        }
    }
};