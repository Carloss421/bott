const Discord = require('discord.js');
const moment = require('moment');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Botun yeniden başlatılmasına onay veriyorsanız 10 saniye içinde `başlat` yazın.** ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "başlat", {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    max: 1,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    time: 10000,
    errors: ['time'],
  })
  .then((collected) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
      message.channel.sendMessage(`**Bot yeniden başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    .catch(() => {
      message.channel.sendMessage('Yeniden başlatma işlemi iptal edildi.');
    });////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile'],
  permLevel: 4////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};

exports.help = {
  name: 'reboot',
  description: '[SAHİP KOMUTU!]',
  usage: 'reboot'
};////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.