const roles = require('./roles.json');
let admin = roles.admin;
const clr = (2)
module.exports = {
	name: 'edit',
    description: 'Fait dire quelquechose au bot',
    guildOnly: true,
	execute(message, args) {
        
    if(message.member.roles.cache.has(admin)){
        message.channel.bulkDelete(clr)
        const editMessage = args.join(" ")
        message.channel.send(editMessage)
        console.log(`${message.author.username} a édité un message`);

    }else{
        message.delete()
        message.reply('Tu ne peux pas utiliser cette commande')
        console.log(`${message.author.username} a tenté d'utiliser une commande`)
        }
    }
};