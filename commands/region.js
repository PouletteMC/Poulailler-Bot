const id = require('../config.json');
let admin = id.admin;

module.exports = {
    name: 'region',
    description: 'Change la région',
    guildOnly: true,
    execute(message, args) {

        if (!args.length) {

            return message.channel.send("Il faut préciser une réfion ! Tape `!region list` pour voir la liste des régions disponibles")

        }

        else {
            const region = message.content.slice(7).trim().split(' ').shift().toLowerCase()
            switch(region) {

                case 'europe':
                    message.member.guild.setRegion('europe')
                    message.channel.send('Le serveur a été déplacé vers la région **Europe**')
                    break;

                case 'london':
                    message.member.guild.setRegion('london')
                    message.channel.send('Le serveur a été déplacé vers la région **London**')
                    break;

                case 'eu-west':
                    message.member.guild.setRegion('eu-west')
                    message.channel.send('Le serveur a été déplacé vers la région **eu-west**')
                    break;

                case 'list':
                    message.member.channel.send(`Les régions valides sont: amsterdam, india, southafrica, london, us-east, us-west, us-central, south-korea, russia, eu-central, sydney, brazil, eu-west, europ, us-south, hongkong, singapour, frankfurt, dubai, japan`)
                    break;

                case 'cycle':
                    message.member.guild.setRegion('south-korea')
                    message.member.guild.setRegion('europe')
                    message.channel.send("L'allocation du serveur a changé, si il y a encore des problèmes vérifies https://discordstatus.com/")
                    break;

                default:
                    message.channel.send("Cette région n'éxiste pas.")
                

            }
        }
    },
};