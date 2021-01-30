const id = require('../config.json');
let membre = id.membre;
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'site',
	description: 'Envoie le lien du site',
	aliases: ['web', 'website'],
	guildOnly: true,
	execute(async message, args) {

    if(message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = cpnnection.play('../test.mp3');

      dispatcheracher.on('start', () => {
        console.log('mp3 playing')
      });

      dispatcher.on('finish', () => {
        console.log('finished')
      });

      dispatcher.on('error', console.error);
    }

  },
};
