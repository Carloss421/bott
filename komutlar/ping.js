const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(`${client.emojis.get("655468548013162526")}| **` + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};