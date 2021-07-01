const Discord = require('discord.js');

module.exports = (client) => {

const array = [
    {
        name: `Te amo roses uwu`,
        type: `PLAYING`
    },
    {
        name: `Viendo mi luna en el cielo unu`,
        type: `LISTENING`
    }
] 


      setInterval(() => {
        function prensence() {
          client.user.setPresence({
            status: 'dnd',
            activity: array[Math.floor(Math.random() * array.length)], 
          });
        }

        prensence()
      }, 10000);

    }
