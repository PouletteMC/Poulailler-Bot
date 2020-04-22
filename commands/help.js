const id = require('../config.json');
let admin = id.admin;
let acmd = id.AdminCommands
let mcmd = id.MemberCommands
const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    description: 'Liste des commandes',
    execute(message, args){
        message.delete().catch(O_o=>{});
        const data = [];
        const { commands } = message.client;

        if(message.member.roles.cache.has(admin)){

            if (!args.length) {
                data.push('**Voilà la liste des commandes**\n');
                data.push(acmd);
                data.push(`\nPour des informations sur une commande spécifique, tape \`${prefix}help <nom de la commande>\`.`);

                return message.author.send(data, { split : true})
                    .then(() => {
                        if (message.channel.type ==='dm') return;
                        message.reply('Tu as reçu les commandes en DM');
                    })
                    .catch(error => {
                        console.error(`Impossible d'envoyer un DM à ${message.author.tag}.\n`, error);
                        message.reply(`Impossible de t'envoyer un DM, vérifie que tu ne les as pas désactivés`);
                    })
                }
                
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply(`Cette commande n'existe pas !`);
                
            }
            
            data.push(`**Nom:** ${command.name}`);
            if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.usage) data.push(`**Utilisation:** ${prefix}${command.name} ${command.usage}`);
            data.push(`**Cooldown:** ${command.cooldown || 0} seconde(s)`);
            message.delete().catch(O_o=>{});
            message.channel.send(data, { split: true });

        } else {
            if (!args.length) {
                data.push('**Voici la liste de mes commandes !**\n');
                data.push(mcmd);
                data.push(`\nPour plus d'informations sur une commande spécifique, tape \`${prefix}help <nom de la commande>\`.`);
    
                return message.author.send(data, { split : true})
                    .then(() => {
                        if (message.channel.type ==='dm') return;
                        message.reply('Tu as reçu les commandes en DM');
                    })
                    .catch(error => {
                        console.error(`Impossible d'envoyer un DM à ${message.author.tag}.\n`, error);
                        message.reply(`Impossible de t'envoyer un DM, vérifie que tu ne les as pas désactivés`);
                    })
                }
                
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
    
            if (!command) {
                return message.reply(`Cette commande n'existe pas !`);
                
            }
            
            data.push(`**Nom:** ${command.name}`);
            if (command.aliases) data.push(`**Le prince ali** ${command.aliases.join(', ')}`);
            if (command.description) data.push(`**Description:** ${command.description}`);
            if (command.usage) data.push(`**Utilisation:** ${prefix}${command.name} ${command.usage}`);
            data.push(`**Cooldown:** ${command.cooldown || 0} seconde(s)`);
            message.delete().catch(O_o=>{});
            message.channel.send(data, { split: true });
        }

    },
};