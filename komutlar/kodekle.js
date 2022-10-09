const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require("quick.db")
exports.run = (client, message, args) => {
        let prefix = ayarlar.prefix
if (!message.member.roles.find('id', ayarlar.rol.kodpaylaşımcırolü)) return message.channel.send(`Bu Kodu Kullanabilmek İçin <@&${ayarlar.rol.kodpaylaşımcırolü}> Rolüne Sahip Olmalısın!`);
const karaliste = new Discord.RichEmbed()
.setColor(`RED`)
.setTitle(`${client.emojis.get("EMOJİ ID")} ${message.guild.name} KARALİSTE`)
.setDescription(`> **Karaliste Logunu Ayarlamak İçin:** \`${prefix}karaliste kanalayarla #kanal\` \n > **Karalisteye Birini Eklemek İçin:** \`${prefix}karaliste ekle ID\` \n > **Karalisteden Birini Silmek İçin:** \`${prefix}karaliste kaldır ID\` \n > **Karaliste Log Kanalını Kapatmak İçin:** \`${prefix}karaliste kanalsıfırla\` \n > **Sistemi Sıfırlamak İçin:** \`${prefix}karaliste sıfırla\` `);
if(!args[0]) return message.channel.send(karaliste)  

        if(args[0] == 'js') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === ayarlar.ID.jskatagoriID)) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === ayarlar.ID.jskatagoriID)}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(`**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("EMOJİ ID")} İşte Kod;**`)))

            message.reply(`${client.emojis.get("EMOJİ ID")} **Kodunuz Başarıyla JavaScript Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply(`<#${ayarlar.ID.jskatagoriID}> adında bir kategori yok!`)
            }
          }
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        else if(args[0] == 'js+') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === ayarlar.ID.js2katagoriID)) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === ayarlar.ID.js2katagoriID)}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(`**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! JavaScript+ KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Kod Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("EMOJİ ID")} İşte Kod;**

            ${code}`)))
            message.reply(`${client.emojis.get("EMOJİ ID")} **Kodunuz Başarıyla JavaScript++ Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply(`<#${ayarlar.ID.js2katagoriID}> adında bir kategori yok!`)
            }
        }
      //---------------------------------------------------------------------------------------------------------------------------  
      //---------------------------------------------------------------------------------------------------------------------------  
        else if(args[0] == 'altyapı') {
            let kanal = '📁'+args[1]
            let code = args.slice(2).join(' ');
            if (!kanal) return message.channel.send("Kanal İsmi Yazmalısın!");
            if (!code) return message.channel.send("Kodunu Yazmalısın!");
            message.delete();
            if (message.guild.channels.find(a => a.id === ayarlar.ID.altyapıKatagoriID)) {
            message.guild.createChannel(kanal, {type: "text", parent: message.guild.channels.find(a => a.id === ayarlar.ID.altyapıKatagoriID)}).then(c => c.send(new Discord.RichEmbed()
.setColor("RED")
.setDescription(`**${message.guild.name} SUNUCUSU KOD PAYLAŞIM KANALI! Altayapı KATEGORİSİ!**\n
            **${message.author} Tarafından \`\`${kanal}\`\` İsimli Altyapı Eklendi! ${message.author} Teşekkür Ederiz! :heart:\n\n
            ${client.emojis.get("EMOJİ ID")} İşte Altayapı;**

            ${code}`)))
            message.reply(`${client.emojis.get("EMOJİ ID")} **Kodunuz Başarıyla Altyapı Kategorisine Eklendi!\n Eklenen Kanalın İsmi:** \`\`${kanal}\`\` `).then(n => n.delete(5000));
            } else {
            return message.reply("<#"+ayarlar.ID.altyapıKatagoriID+"> adında bir kategori yok!")
            }
        }
      }  
      

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle'
};