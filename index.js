const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const db = require('megadb')
const lineReply = require('discord-reply')
const mongoose = require('mongoose')
const { token, prefix } = require('./config.json')

mongoose.connect('MONGO SERVER!', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log('Conectado a MongoDB!'))

require('dotenv').config();

const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
const keepAlive = require('./server.js');

const fs = require('fs')


const config = require('./config.json')
client.config = config

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaway.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanWin: false,
    exemptPermissions: [],
    embedColor: 'RANDOM',
    embedColorEnd: 'RANDOM',
    reaction: "EMOJI ID o 🎉"
  }
})

///////////////Handler////////////////////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}


for(const file of fs.readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}



client.snipes = new Map()


const Monitor = require('ping-monitor');
const message = require('./eventos/message.js');

keepAlive();
const monitor = new Monitor({
   website: "Link Replt o Glitch!",
   title: 'Hola uwu',
   interval: 5     
})

client.on('message', async message => {

  if(message.author.bot)return;

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {

    const embed = new Discord.MessageEmbed()
  
    .setTitle("Buenas")
    .setDescription('Tu  Texto!')
    .setColor("RANDOM")
    message.lineReply(embed)
  }

  const automod = new db.crearDB({carpeta: 'Databases', sub: 'moderacion', nombre: 'automod'})
    if(automod.has(message.guild.id)){
      const palabras = await automod.map(`${message.guild.id}.words`, (w, t) => `${t}`).then(pa => {
      
        pa.some(palab => {
          if(message.content.includes(palab)){
            message.delete()
            message.channel.send(`${message.author} porfavor intenta evitar utilizar palabras hirients o vulgares`)
          }
        })
      })
    }
})

client.on('guildMemberAdd', async (member) => {


const embed = new Discord.MessageEmbed()

.setTitle(' Un Usuario se ha unido!')
 .setDescription(`El Usuario **${member.user.username}** se ha unido al servidor!\n\nNo Olvides leerte el canal de <#858037153908785194> Para Evitar problemas\nEspero que te lo pases muy Bien`)
 .setFooter("Gracias por unirte :3")
 .setColor("RANDOM")

 client.channels.cache.get('CANAL ID').send(embed)

})

client.on("guildMemberRemove", async (member) => {

  const embed = new Discord.MessageEmbed()

 .setTitle(' Un Usuario se ha ido!')
 .setDescription(`El Usuario **${member.user.username}** se ha ido del servidor espero que vuelva! :c`)
 .setFooter("Esperamos que vuelva!")
 .setColor("RANDOM")

 client.channels.cache.get('CANAL ID').send(embed)

})

client.on('messageDelete', message => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
})

require('./logger')(client);

client.login(token)
