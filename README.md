<h1 align="center"><img src="./assets/logo.png" width="30px"> Discord Logger Basic <img src="./assets/logo.png" width="30px"></h1>
<p align="center">LoggerBasic! :heart: </p>

## ✨Últimas actualizaciones✨

> Estamos esperando amablemente que Discord.js se actualice a v13 (como una versión estable) para que podamos comenzar a actualizar el bot nuevamente. Sabemos que el bot tiene algunos errores en este momento.
>
> Actualizaciones , Agregado el setprefix.js , npmsearch.js  , youtube.js , bank.js ect !

Cuando decida que desea alojar este bot usted mismo, no espere que esto funcione en el primer intento a menos que sepa lo que está haciendo. Necesita saber cómo usar el portal de desarrolladores de Discord, así como agregar enlaces redirect_uri para que su tablero funcione correctamente. Intentamos ayudar lo mejor que podemos, pero no espere que lo hagamos por usted porque son cosas que se requieren al usar este bot.

## 📝 [Servidor de soporte](https://discord.gg/TvBXwYbW4y)

¿Tiene algún problema con el bot? Dirígete a nuestro [Discord Server](https://discord.gg/TvBXwYbW4y) donde podemos ayudarlo más rápido que crear un problema de GitHub. Si tiene un error importante que informa.

## 📸 Capturas de pantalla

<div align="left"><img src="/assets/CapturaDePantalla1.png"></div><div align="center"><img src="/assets/CapturaDePantalla2.png"></div><div align="right"><img src="/assets/CapturaDePantalla3.png"></div>

<div align="center"><img src="/assets/CapturaDePantalla4.png"></div>

## ⚠ Como Usar Este Proyecto
**Se requiere Node.JS 12.0.0 o más reciente y el PACKAGE DE AOI.JS**
**Primero Debes Irte Al Package y Pones Esto!**

# PACKAGE
```javascript

{
  "name": "Bot-Love.Replit",
  "version": "1.0.0",
  "description": "This is your README. READMEs are where you can communicate what your project is and how to use it.",
  "main": "index.js",
  "dependencies": {
    "@iamtraction/google-translate": "^1.1.2",
    "@k3rn31p4nic/google-translate-api": "^1.1.1",
    "aki-api": "^5.2.1",
    "ascii-table": "^0.0.9",
    "colors": "^1.4.0",
    "cpu-stat": "^2.0.1",
    "discord-backup": "^2.5.0",
    "discord-buttons": "^3.2.1",
    "discord-giveaways": "^4.5.1",
    "discord-math": "^1.0.5",
    "discord-reply": "^0.1.2",
    "discord.js": "^12.5.3",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "fs": "^0.0.1-security",
    "keepalive": "^3.0.0",
    "megadb": "^3.4.0",
    "moment": "^2.29.1",
    "mongoose": "^5.12.15",
    "ms": "^2.1.3",
    "node-fetch": "^2.6.1",
    "node-superfetch": "^0.2.3",
    "os": "^0.1.1",
    "ping-monitor": "^0.6.1",
    "prebuild-install": "^6.1.3",
    "quick.db": "^7.1.3",
    "snakecord": "^1.0.7",
    "util": "^0.12.4",
    "ytsr": "^3.5.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Despues De Esto Pones**

```text
npm init -y
```
**Despues De Esto Pones**

```javascript
npm install
```
**Para Instalar Todos Los Packages uwu!**

## Como Activalo?
**Aqui Te Enseño Como Activalo Correctamente!**

# PASO 1:
**Debes Irte A Discord Developers o [Click Aqui](https://discord.com/developers/applications/clientid/bot) Y Coger El Token De Tu Bot Irte Donde el Archivo config.json Pones Esto:**

  ```javascript
{
    "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
    "prefix": "!"
}
  ```

# No Sabes Como Copiar Tu Token? Sencillo Aqui Lo Podes Ver uwu:

<div align="left"><img src="/assets/token.gif">

# Paso 2:
**Despues Del Paso Numero 1 Debes Irte Al Archivo index.js y Pones Esto Donde Dice Esto:**

<div align="left"><img src="/assets/jsjsjs.png">

**Asi:**

```javascript
const config = require('./config.json')
client.config = config

const { GiveawaysManager } = require('discord-giveaways'); //npm install discord-giveaways
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaway.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanWin: false,
    exemptPermissions: [],
    embedColor: 'RANDOM',
    embedColorEnd: 'RANDOM',
    reaction: "EMOJI ID o 🎉" // Ejemplos: reaction: "🎉" o reaction: "862087087209054239" - ID Del Emoji Personalizado
  }
})
```

# Paso 3:
**Debes Irte Al Archivo config.js y Poner Esto:**

```javascript
{
    "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
    "prefix": "!",
    "everyoneMention": false,
    "hostedBy": true,
    "loggerChannelID": "",
    "webhook": {
       "id": "ID DEL  WEBHOOK",
       "token": "TOKEN DEL WEBHOOK"
       /*
       * Crea un nuevo webhook
       * El ID y el token de Webhooks se pueden encontrar en la URL, cuando solicita esa URL o en el cuerpo de la respuesta.
       * https://discord.com/api/webhooks/12345678910/T0kEn0fw3Bh00K
       *                                  ^^^^^^^^^^  ^^^^^^^^^^^^
       *                                  Webhook ID  Webhook Token
       */
    } 
}
```

# Paso 4 y Ultimo Paso

**Despues De los 3 Pasos Este Es El Ultimo Paso!**
**Debes Poner En La Consola Esto:**

```javascript
node .
```
**Y Se Activa El Bot Y  Ya Puedes Usarlo UwU**

**Package Aqui: [**Click Aqui**](https://github.com/Jennifer7w7/LoggerBasic#package)**

## 💨 Ejecuta los proyectos


Glitch: [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/Jennifer7w7/LoggerBasic)
Repl: [![Run on Repl.it](https://repl.it/badge/github/SudhanPlayz/Discord-MusicBot)](https://repl.it/github/Jennifer7w7/LoggerBasic)
Heroku: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Jennifer7w7/LoggerBasic)

!Hecho Con Amor ❤️ y JavaScript!

Necesitas Ayuda? Si es Asi Hablame!: [ ,´#4304](https://discord.com/users/804826341471420417)
