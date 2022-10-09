const Discord = require('discord.js');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const db = require('quick.db');
const a = require('../ayarlar.json') 
 ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.run = async function(client, message, args) {
  ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if(message.channel.id != a.log.komutlarkanal) return message.channel.send(`:x: **Bu Komutudu <#${a.log.komutlarkanal}> Kanalında Kullan!**`).then(n => n.delete(5000));

  message.channel.bulkDelete(1)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}istek-kanal ayarla #kanal\``)
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | İstek Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | İstek Sistemi.`, client.user.avatarURL)

  const cfx4 = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor("#00ff88")
  .setFooter(`${client.user.username} | İstek Sistemi.`, client.user.avatarURL)
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.





db.set(`emo${message.author.id}`, message.author.id)
    let emo = await db.fetch(`emo${message.author.id}`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

    chan.send(cfxistekkanal).then(m => {
chan.send(new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`\n\nKullanıcı Adı`, message.author.username,true)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.addField(`Kullanıcı ID`,message.author.id,true)
.addField("**İstek Kod**", `\`${code}\``)
.addField("Sayın Yetkililer! İstek Kod Eklendiyse `✅` Buna, Eklenmediyse `❎` Buna Basınız! Boş Yere Kullanan Kişiler Ceza Alıcaktır! ", "** **")  
.setThumbnail(message.author.avatarURL))
.then(async function(sentEmbed) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  
        const emojideistir = ["✅", "❎", "🔒"];
        const filter = (reaction) =>
     
          emojideistir.includes(reaction.emoji.name)
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    
        await sentEmbed.react(emojideistir[0]).catch(function() {});
        await sentEmbed.react(emojideistir[1]).catch(function() {});
        await sentEmbed.react(emojideistir[2]).catch(function() {});
              var reactions = sentEmbed.createReactionCollector(filter, {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        });
 reactions.on("collect", async function (reaction) {
   if(reaction.bot) return;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
				if (reaction.emoji.name === "✅") {          
          message.guild.members.find(x => x.id === emo).send(':tada: **İsteğiniz Yetkililer Tarafından Kabul Edildi!**')
        }
 ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    if (reaction.emoji.name === "❎") {          
    message.guild.members.find(sads => sads.id === emo).send(':x: **İsteğiniz Yetkililer Tarafından Reddedildi! Üzgünüm!**')     
   }   

})})////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
})
message.author.send(cfx4).then(m => {
  m.delete(300000)
})
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
}};


exports.conf = {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};

exports.help = {
  name: 'istek'
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
