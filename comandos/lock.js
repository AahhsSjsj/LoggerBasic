const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')

module.exports = {
  name: "lock",
  alias: [""],

async execute (client, message, args){

        var perms = message.member.hasPermission("MANAGE_CHANNELS")
        if(!perms) return message.lineReply("No Tienes Permisos")
       
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.lineReply("No Tengo Permisos")
       
        const everyone = message.guild.roles.cache.find(
            peo => peo.name === '@everyone'
        );
       
        message.channel.updateOverwrite(everyone, { SEND_MESSAGES: false})

        message.lineReply('Canal Bloqueado Con Exito!')
   
 
 }

}