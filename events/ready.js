const chalk = require('chalk');
const Discord = require('discord.js');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
module.exports = client => {
 setInterval(function() {
}, 8000);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
client.user.setPresence({
        game: {
            name: `Airfax music `,
            type: 'listening'////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        },
        status: 'online'
    })////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    console.log(`[${client.user.username}]: Giriş Yaptı! Komutlar Yüklendi! Airfax/Youtube!`);
}////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.