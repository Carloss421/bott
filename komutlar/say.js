const Discord = require("discord.js");
const a = require("../ayarlar.json")////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

module.exports.run = async (client, message, args) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const bergy = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.guild.name, message.guild.avatarURL)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setThumbnail(message.guild.iconURL)  
.setDescription(`
${client.emojis.get(a.emoji.sağok)} | **Sunucudaki \`Toplam Üye\` Sayısı:** \`${message.guild.memberCount}\`
${client.emojis.get(a.emoji.sağok)} | **Sunucudaki \`Online\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'online').size}\`
${client.emojis.get(a.emoji.sağok)} | **Sunucudaki \`idle\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'idle').size}\`
${client.emojis.get(a.emoji.sağok)} | **Sunucudaki \`Dnd\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'dnd').size}\`
${client.emojis.get(a.emoji.sağok)} | **Sunucudaki \`Offline\` Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'offline').size}\`
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
  name: "say"
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
