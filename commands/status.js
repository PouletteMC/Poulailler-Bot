const id = require('../config.json');
let admin = id.admin;
const clr = (2)
module.exports = {
	name: 'status',
    description: 'Fait dire quelquechose au bot',
    guildOnly: true,
	execute(message, args) {
        
    if (message.member.roles.cache.has(admin)){
        message.channel.bulkDelete(clr).catch(O_o=>{});
        const status = args.join(" ")
        client.user.setActivity(status, { type: "PLAYING"})


    } else {
        message.delete().catch(O_o=>{});
        message.reply('Cette commande est réservés aux Admins.')
        console.log(`${message.author.username} a tenté d'utiliser la commande ${command.name}`)
        }
    }
};