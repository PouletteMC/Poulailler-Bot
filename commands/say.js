const roles = require('./roles.json');
let admin = roles.admin;
module.exports = {
	name: 'say',
    description: 'Fait dire quelquechose au bot',
    aliases: ['annonce', 'event'],
    guildOnly: true,
	execute(message, args) {
        
    if(message.member.roles.cache.has(admin)){
        const sayMessage = args.join(" ");
        message.delete()
        message.channel.send(sayMessage)
        console.log('le bot a parlé');

    }else{
        message.delete()
        message.reply('Tu ne peux pas utiliser cette commande')
        console.log(`${message.author.username} a tenté d'utiliser une commande`)
        }
    }
};