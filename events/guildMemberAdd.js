 const ayarlar = require('../ayarlar.json');
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
var prefix = ayarlar.prefix;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

module.exports = member => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**Hoşgeldin Aramızda Görmeyi Çok İstemiştik Geldin**');
}; ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.