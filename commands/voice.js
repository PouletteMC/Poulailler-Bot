const id = require('../config.json');
let membre = id.membre;
const { Client, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'voice',
	description: 'Connecte le bot au channel vocal',
	aliases: ['voix', 'vox'],
	guildOnly: true,
	execute(message, args) {

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
