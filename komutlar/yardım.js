const Discord = require("discord.js");
const a = require("../ayarlar.json")////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const prefix = a.prefix
module.exports.run = async (client, message, args) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const bergy = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(`${message.guild.name} Yardım`,message.guild.avatarURL)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setThumbnail(message.guild.iconURL)  
.setDescription(`__**Komutlar**__

**${prefix}bototorol ;**
\`Bota Otomatik Rol verir.\`

**${prefix}karaliste ;**
\`Üyeyi Kara Listeye Alır/çıkarır!\`

**${prefix}reboot ;**
\`[Sahip Komutu]\`

**${prefix}say ;**
\`Sunucuyu Sayar!\`




`)
  .setFooter(`Komutu Kullanan: ${message.author.tag}`, message.author.avatarURL)   ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  message.channel.sendEmbed(bergy);
};
exports.conf = {
  enabled: true,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
