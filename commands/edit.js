const id = require('../config.json');
let admin = id.admin;
const clr = (2)
module.exports = {
	name: 'edit',
    description: 'Fait dire quelquechose au bot',
    guildOnly: true,
	execute(message, args) {
        
    if(message.member.roles.cache.has(admin)){
        message.channel.bulkDelete(clr).catch(O_o=>{});
        const editMessage = args.join(" ")
        message.channel.send(editMessage)
        console.log(`${message.author.username} a édité un message`);

    }else{
        message.delete().catch(O_o=>{});
        message.reply('Cette commande est réservés aux admins.')
        console.log(`${message.author.username} a tenté d'utiliser la commande ${command.name}`)
        }
    }
};