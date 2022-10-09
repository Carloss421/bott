const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.run = function(client, message) {

  if(message.channel.id != ayarlar.log.komutlarkanal) return message.channel.send(`:x: **Bu Komutudu <#${ayarlar.log.komutlarkanal}> Kanalında Kullan!**`).then(n => n.delete(5000));
  
  message.channel.bulkDelete(1)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

/////////////////////Config

 var rolismi = ayarlar.rol.jsrolismi;    ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  var guildid = ayarlar.sunucuID 

///////////////// Ana Kod
message.channel.bulkDelete(1)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  var role = message.guild.roles.find(i => i.id === ayarlar.rol.js); ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if (message.member.roles.has(role.id)) return message.channel.send("❌ Maalesef, **"+rolismi+"** Role Sahipsin").then(n => n.delete(5000));
  if(!role) return message.channel.send(`**<@&${rolismi}>**`, "Adında Bir Rol Bulamıyorum Lütfen <@"+ayarlar.sahip+"> 'e ulaş" )
else {
message.channel.send("✅  Başarıyla **"+rolismi+"** Rolün verildi!").then(n => n.delete(5000));////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
message.member.addRole(role);
}
  
    };
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.conf = {
  enabled: true,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  guildOnly: false,
  aliases: ['javascript',],
  permLevel: 0////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};

exports.help = {
  name: 'js',////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  description: 'JavaScript Rolünü Verir',
  usage: 'js'////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};