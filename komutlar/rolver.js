const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        "`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply(
      "❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    );
  let guild = message.guild;
  let rol = message.mentions.roles.first();////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  let user = message.mentions.members.first();

  if (!user)
    return message
      .reply("**⚠ Rol Vermek İstediğin Kişiyi Yazmalısın!**")////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      .catch(console.error);
  if (rol.length < 1) return message.reply("**⚠ Bir Rol Yazmalısın!**");

  user.addRole(rol);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    )
    .setFooter(message.guild.name, message.guild.iconURL);
  message.channel.send(embed);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};

exports.conf = {
  enabled: true,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  guildOnly: true,
  aliases: ["rolver", "rv"],
  permLevel: 0
};
exports.help = {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  name: "rolver"
};
   ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.