const Discord = require('discord.js');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const ayarlar = require('../ayarlar.json')
const db = require("quick.db")////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.run = (client, message, args) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        let prefix = ayarlar.prefix////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
if (!message.member.roles.find('id', ayarlar.rol.kodpaylaşımcırolü)) return message.channel.send(`Bu Kodu Kullanabilmek İçin <@&${ayarlar.rol.kodpaylaşımcırolü}> Rolüne Sahip Olmalısın!`);
const kodekle = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setColor(`RED`)
.setTitle(`${client.emojis.get(ayarlar.emoji.taç)} ${message.guild.name} Kod Ekle`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setDescription(`
**> Rank Seç (js, js+, altyapı) \n Örneğin;** \`!kodekle js+ mesaj-sil (Mesaj Komudu)\`

`);
if(!args[0]) return message.channel.send(kodekle)  ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

        if(args[0] == 'js') {
            let kanal = '📁-'+args[1]////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            message.delete();
            if (message.guild.channels.find(a => a.id === ayarlar.ID.jskatagoriID)) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === ayarlar.ID.jskatagoriID)}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(`**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get(ayarlar.emoji.sağok)} İşte Kod;**
            
            ${code}`)))
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            message.reply(`${client.emojis.get(ayarlar.emoji.tik)} **Kodunuz Başarıyla JavaScript Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply(`<#${ayarlar.ID.jskatagoriID}> adında bir kategori yok!`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            }
          }////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        else if(args[0] == 'js+') {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            let kanal = '📁-'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === ayarlar.ID.js2katagoriID)) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === ayarlar.ID.js2katagoriID)}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setDescription(`**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript+ KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get(ayarlar.emoji.sağok)} İşte Kod;**

            ${code}`)))
            message.reply(`${client.emojis.get(ayarlar.emoji.tik)} **Kodunuz Başarıyla JavaScript++ Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            } else {
            return message.reply(`<#${ayarlar.ID.js2katagoriID}> adında bir kategori yok!`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            }
        }////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        else if(args[0] == 'altyapı') {
            let kanal = '📁-'+args[1]////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === ayarlar.ID.altyapıKatagoriID)) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === ayarlar.ID.altyapıKatagoriID)}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setDescription(`**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! Altayapı KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Altyapı Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get(ayarlar.emoji.sağok)} İşte Altayapı;**

            ${code}`)))////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
            message.reply(`${client.emojis.get(ayarlar.emoji.tik)} **Kodunuz Başarıyla Altyapı Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#"+ayarlar.ID.altyapıKatagoriID+"> adında bir kategori yok!")
            }////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        }
      }  
      ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

exports.conf = {
  enabled: true,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  guildOnly: false,
  aliases: [],////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  permLevel: 0
};

exports.help = {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  name: 'kodekle'
};