const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const db = require('megadb')
const lineReply = require('discord-reply')
const mongoose = require('mongoose')

module.exports = async (client, message) => {


   const db = require('megadb')
   const prefix_db = new db.crearDB('prefix')
    let prefix;
    
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
      prefix = 'Tu Prefix!'
    }
      
      if(!message.content.startsWith(prefix)) return;
      if(message.author.bot) return;
      
      let usuario = message.mentions.members.first() || message.member; 
      const args = message.content.slice(prefix.length).trim().split(/ +/g); 
      const command = args.shift().toLowerCase(); 
      
      let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
      if(cmd){
        cmd.execute(client, message, args)
      }
}

console.log('texto')