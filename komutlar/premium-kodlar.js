const Discord = require('discord.js');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const ayarlar = require("../ayarlar.json")
exports.run = function(client, message, args) {
if(message.channel.id != ayarlar.log.komutlarkanal) return message.channel.send(':x: **Bu Komutudu <#'+ayarlar.log.komutlarkanal+'> Kanalında Kullan!**').then(n => n.delete(5000));  
let a = message.guild.channels.find(x => x.id === ayarlar.ID.jskatagoriID)
let b = a.children.map(x => x.name )////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
let c = message.guild.channels.find(x => x.id === ayarlar.ID.js2katagoriID)
let d = c.children.map(x => x.name )
let e = message.guild.channels.find(x => x.id === ayarlar.ID.altyapıKatagoriID)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
let f = e.children.map(x => x.name )
message.author.send(new Discord.RichEmbed()
  .setTitle(`${message.guild.name} Adlı Sunucudaki Premium Kodlar!`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .addField(`** **`, `\`Ücretsiz\` **__JavaScript__** Kategorisi;\n ${b.join(`\n`)}`)
  .addField(`** **`, `\`7 İnvite\` **__JavaScript++__** Kategorisi;\n ${d.join(`\n`)}`)
  .addField(`** **`, `\`10 İnvite\`  **__Altyapı__** Kategorisi;\n ${f.join(`\n`)}`)
  .setColor("GOLD"))
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.conf = {
  enabled: true,
  guildOnly: true,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  aliases: ["pre-kod", "premuim-kodlar"],
  permLevel: 0////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};
exports.help = {
  name: 'kodlar',
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.