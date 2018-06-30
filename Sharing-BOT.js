const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Hello 
Pls Join And Don't Leave
                               [ https://discord.gg/D3zxTGM ] 
Invite Privte For You ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NDU0MTYxODM0NDgwNzYyODgx.DhhQwg.qgQa8Ql6Ou22CImU0k_dP6loQzs');