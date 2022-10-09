const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.run = async (client, message, args) => {
  
  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  let cfxistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`İstek Kanalı ${cfxistekkanal} olarak ayarlandı.`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | İstek Kanal Sistemi.`, client.user.avatarURL)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`İstek Kanalı Kapatıldı.`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | İstek Kanal Sistemi.`, client.user.avatarURL)
  const cfxembed = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setTitle(`**\`İstek-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}istek-kanal kapat\``)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | İstek Kanal Sistemi.`, client.user.avatarURL)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  
  ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if (!args[0]) return message.channel.send(cfxembed)
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if (args[0] == cfxistekkanal) return db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id) - message.channel.send(cfx1);

  
  if (args[0] == 'ayarla') {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    
    db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id)
    message.channel.send(cfx1)

  }
  if (args[0] == 'kapat') {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
};


exports.conf = {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  enabled: true,
  guildOnly: false, 
  aliases: ['ikanal'],
  permLevel: 0 
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

exports.help = {
  name: 'istek-kanal',
  description: 'AirCod KOD PAYLASIM',////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  usage: 'istek-kanal #kanal'
};
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.