const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {

  if(message.channel.id != ayarlar.komutlarkanal) return message.channel.send(`:x: **Bu Komutudu <#${ayarlar.komutlarkanal}> Kanalında Kullan!**`).then(n => n.delete(5000));
  
  message.channel.bulkDelete(1)

/////////////////////Config

 var logkanali = ayarlar.logkanali; 
 var rolismi = ayarlar.rolismi; 
var logkanalid = ayarlar.logkanalid;   
  var guildid = ayarlar.sunucuID 

///////////////// Ana Kod
message.channel.bulkDelete(1)
  var role = message.guild.roles.find(i => i.id === "693562376674345070"); 
  if (message.member.roles.has(role.id)) return message.channel.send("❌ Maalesef, Bu Role Sahipsin").then(n => n.delete(5000));
  if(!role) return message.channel.send(`<@$693562376674345070>`, "Adında Bir Rol Bulamıyorum Lütfen <@"+ayarlar.sahip+"> 'e ulaş" )
  if(logkanali == "false") {
message.member.addRole(role);
message.channel.send("✅  Başarıyla <@&693562376674345070> Rolün verildi!").then(n => n.delete(5000));
client.channels.get(logkanalid).send("✅  | " + message.author +" Adlı Kullanıcı Başarılı Bir Şekilde **<@"+rolismi+">** Adlı Rolü Aldı!")
}else {
message.channel.send('✅  Başarıyla <@&693562376674345070> Rolün verildi!').then(n => n.delete(5000));
message.member.addRole(role);
}
  
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['javascript',],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript Rolünü Verir',
  usage: 'js'
};