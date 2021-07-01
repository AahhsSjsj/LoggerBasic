const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const ms =  require('ms')
const lineReply = require('discord-reply')
const db = require('megadb')
const backup = require('discord-backup')
backup.setStorageFolder(__dirname+"/backups/")

module.exports = {
  name: "backup",
  alias: [""],

async execute (client, message, args){

    var perms = message.member.hasPermission("ADMINISTRATOR")
    if(!perms) return message.lineReply("No Tienes Permisos")

    const accion = args[0]
    if(!accion) return message.lineReply("Debes Decir que vas a hacer.")

    if(accion === 'create'){

        backup.create(message.guild, {
            jsonBeautify: true
        }).then(backupData => {
            const embed = new Discord.MessageEmbed()

            .setTitle("Backup Creado!")
            .setDescription(`Para Usar el backup escribe <Prefix>backup load ${backupData.id}`)
            .setColor("GREEN")
            .setFooter("No Compartas el ID con nadie")

            message.author.send(embed)

            const embed2 = new Discord.MessageEmbed()

            .setTitle("Backup Creado Correctamente")
            .setDescription("El ID ha sido enviado por MD")

            message.lineReply(embed2)
        })
    }

    if(accion === 'load'){

        let backupID = args[1]
        if(!backupID) return message.lineReply("Debes Decirme el ID de Backup")

        const embedfinal = new Discord.MessageEmbed()

        .setTitle("Cargar Backup")
        .setDescription(`:warning: Cuando El Backup Se Este Cargando, Los Canales , roles y emojis seran Cambiados, Si Estas Seguro de hacer esto, reacciona en <:NodeJSxd:858934340423647262>`)
        .setColor('RED')

        backup.fetch(backupID).then(async () => {
            message.lineReply(embedfinal).then(msg => {
                msg.react('858934340423647262')

                msg.awaitReactions((reaction, user) => {
                    if(message.author.id !== user.id) return;

                    if(reaction.emoji.id === '858934340423647262'){
                        backup.load(backupID, message.guild).then(() => {
                            clearGuildBeforeRestore: true,
                            backup.remove(backupID)
                        }).catch((err) => {
                            return message.lineReply("Hubo un error!")
                        })
                    }
                })
            })
        })
    }

 
 }

}