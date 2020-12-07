const id = require('../config.json');
let admin = id.admin;
const cls = (100)
module.exports = {
	name: 'clear',
	cooldown: 5,
	aliases: ['cls'],
	description: 'Clear !',
	guildOnly: true,
	execute(message, args) {

        const arguments = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
    const amount = arguments.join(' '); // Amount of messages which should be deleted

    if (!amount)
        message.channel.bulkDelete(100)

    if (isNaN(amount))
        return message.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

    if (amount > 100)
        return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100

    if (amount < 1)
        return message.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

    else {
        message.channel.bulkDelete(amount)
        console.log(`J'ai supprimé ${amount} messages`)
    }

    }
}