const Discord = require('discord.js')////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  if (!rol) return message.channel.send(`Bot otorol olarak ayarlamak istediğin rolü etiketlemelisin. \`${prefix}bototorol @Bot\``)

  db.set(`bototorol_${message.guild.id}`, rol.id)
  message.channel.send(`Bot otorol \`${rol.name}\` olarak ayarlandı. Kapatmak için \`${prefix}bototorol\` yazmalısın.`)

};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    
exports.conf = {
    enabled: true,
    guildOnly: true,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    aliases: ['bot-oto-rol'],
    permLevel: 0
}

exports.help = {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    name: 'bototorol',
    description: 'Sunucuya giren bota seçtiğiniz rolü otomatik verir.',
    usage: 'bototorol <@rol>'////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
}