const ayarlar = require('../ayarlar.json');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = async message => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  
  let client = message.client;
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let cfxkaralistededb = await db.fetch(`cfxkaralistededb${message.author.id}`)
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
    if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    } else {
    }
  }
  if (cmd) {
    if (cfxkaralistededb == 'karalistede') return message.channel.send(`\`${message.author.tag}\` Komut Kullanamazsın Karalistedesin.`);
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  }
};