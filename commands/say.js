const id = require('../config.json');
let admin = id.admin;
module.exports = {
	name: 'say',
    description: 'Fait dire quelquechose au bot',
    guildOnly: true,
	execute(message, args) {
        
    if(message.member.roles.cache.has(admin)){
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage)
        console.log('le bot a parlé');

    } else {
        message.delete().catch(O_o=>{});
        message.reply('Cette commande est réservés aux Admins.')
        console.log(`${message.author.username} a tenté d'utiliser la commande ${command.name}`)
        }
    }
};