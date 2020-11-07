const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const id = require('./config.json');

let bienvenue = id.bienvenue;
let membre = id.membre;

const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
cont guild = new Discord.Guild(client, data);

client.commands = new Discord.Collection();


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('ready', () => { //lorsque le bot a démarré

  console.log(`${client.user.tag} est en ligne !`) //On envoie un message dans la console
  client.user.setActivity("Chicken Simulator", { type: "PLAYING"}) //on met une activité au bot
});


client.on('guildMemberAdd', member => { // Lorsque qu'un utilisateur rejoint le serveur

    console.log('Un utilisateur a rejoint le serveur') // Le dire dans la console

    var channel = member.guild.channels.cache.find(channel => channel.id == bienvenue); // On charge l'id de "bienvenue"
    var wmsg = [`Qui est arrivé en premier ? L'oeuf ou le ${member} ?`,`Un ${member} sauvage apparaît !`,`Tiens, j'ai cru voir un ${member}.\n Mais oui, mais oui, j'ai bien vu un ${member}`,`${member} à éclos, il y a un nouveau poulet !`]; // On met des messages dans la variable wmsg
    var fact = Math.floor(Math.random() * wmsg.length); // On choisit un message au hasard qu'on stocke dans fact
    channel.send(wmsg[fact]); // on envoie fact

    var Role = member.guild.roles.cache.find(role => role.id == membre);// On charge l'id du rôle membre
    member.roles.add(Role,"Reason"); // On donne le rôle au nouveau membre
    member.send(`Bienvenue sur le serveur !\n \nNotre Discord à pour but de vous communiquer des informations sur les événements et chagements à venir.\nIl met aussi en relation les joueurs et les différentes équipes !\nTu as accès à quelques commandes :\n          - Tape !ressourcepack, !rp ou !ressource pour recevoir le ressourcepack du serveur !\n          - Tape !info pour voir quelques informations à propos du discord\n          - Tape !ping pour voir si le bot est en ligne !\n \nMerci de nous avoir rejoints et bon jeux !`) // On envoie ce texte en message privé

  });


client.on('message', message => { // lorsqu'un message est envoyé

    if (!message.content.startsWith(prefix) || message.author.bot) return; // si le message ne comence pas par le prefix aller vers 'try'

    const args = message.content.slice(prefix.length).split(' '); // si le message commence par le prefix, on récupère ce qui suir le prefix
    const commandName = args.shift().toLowerCase(); //on met tout en minuscule
    const command = client.commands.get(commandName) //on récupère les commandes
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); // on charge le nom des commandes et leurs alias

    if (!command) return; // Si aucun nom ne correspond, aller vers 'try'

    if (command.guildOnly && message.channel.type !== 'text') { // Si la commande est limitée aux serveurs et que le trigger est envoyé ailleurs que dans un text channel
        return message.reply('Impossible de réaliser cette action en DM'); // On envoie ce message
    }

    if (command.args && !args.length) { //Si la commande requiert des arguments et qu'il n'y en a pas
        let reply = 'Il manque des informations'; // On envoie ce message

        if (command.usage) { // Si la commande à un usage défini
            reply += `\nUne bonne utilisation de cette commande serait : \`${prefix}${command.name} ${command.usage}\``; // On charge l'usage de la commande dans reply
        }
        return message.channel.send(reply); // On envoie reply
    }

    if (!cooldowns.has(command.name)) { // Si la commande n'a pas de cooldown
        cooldowns.set(command.name, new Discord.Collection()); // On effectue la commande
    }

    const now = Date.now(); // la constante now prend la valeur de la date actuelle
    const timestamps = cooldowns.get(command.name); // timestamps prend la valeur du cooldown de la commande
    const cooldownAmount = (command.cooldown || 0) * 1000; // cooldownamount prend la valeur de cooldown ou 0 si pas de cooldown (*1000 pour tps en secondes)

    if (timestamps.has(message.author.id)) { // 
        const expirationTime = timestamps.get(message.author.if) + cooldownAmount; //
        
    if (now < expirationTime) { // Si la date actuelle < a la date d'expiration
        const timeLeft = (expirationTime - now) / 1000; // timeleft prend la valeur date d'expiration - heure actuelle (/1000 pour récupérer un temps normal)
        return message.reply(`Attends encore ${timeLeft.toFixed(1)} seconde(s) avant de pouvoir utiliser \`${command.name}\` à nouveau}`); // envoyer ce message
        }
    }

    try {
        command.execute(message, args); 

    } catch (error) { // Si rien ne correspond
        console.error(error); // On envoie l'erreur dans la console -- évite un crash
        message.reply('Je ne reconnais pas cette commande'); //on envoie ce message
    }

});


client.login(token); // On charge le token du bot