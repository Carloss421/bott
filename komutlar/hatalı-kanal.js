const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

exports.run = async (client, message, args) => {
  
  
  let cfxhatalı = await db.fetch(`hatalıkanal${message.guild.id}`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  let cfxhatalıkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`Hatalı Kanalı ${cfxhatalıkanal} olarak ayarlandı.`)
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | Hatalı Kanal Sistemi.`, client.user.avatarURL)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`Hatalı Kanalı Kapatıldı.`)
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | Hatalı Kanal Sistemi.`, client.user.avatarURL)
  const cfxembed = new Discord.RichEmbed()
  .setTitle(`**\`Hatalı-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}hatalı-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}hatalı-kanal kapat\``)
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | Hatalı Kanal Sistemi.`, client.user.avatarURL)
  ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == cfxhatalıkanal) return db.set(`hatalıkanal${message.guild.id}`, cfxhatalıkanal.id) - message.channel.send(cfx1);
    
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if (args[0] == 'ayarla') {
    
    db.set(`hatalıkanal${message.guild.id}`, cfxhatalıkanal.id)
    message.channel.send(cfx1)
    ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    
  }
  
  if (args[0] == 'kapat') {
    
    db.delete(`istekkanal${message.guild.id}`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    message.channel.send(cfx2)
    
  }
  
  
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['hkanal'],////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  permLevel: 0 
};

exports.help = {
  name: 'hata-kanal',
  description: 'AirCod KOD PAYLASIM',
  usage: 'hatalı-kanal #kanal'////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};
