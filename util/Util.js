
const request = require('node-superfetch');
const crypto = require('crypto');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const { IMGUR_KEY } = process.env;
const yes = ['evet'];
const no = ['hayır']////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

const deleteCommandMessages = function (msg, client) { ////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        if (msg.deletable && client.provider.get('global', 'deletecommandmessages', false)) {
          return msg.delete();
        }////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  };

class Util {
        static wait(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        }

        static shuffle(array) {
                const arr = array.slice(0);
                for (let i = arr.length - 1; i >= 0; i--) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                        const j = Math.floor(Math.random() * (i + 1));
                        const temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                }
                return arr;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        }
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        static list(arr, conj = 'and') {
                const len = arr.length;
                return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;
        }
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        static shorten(text, maxLen = 2000) {
                return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        }

        static duration(ms) {
                const sec = Math.floor((ms / 1000) % 60).toString();////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                const min = Math.floor((ms / (1000 * 60)) % 60).toString();
                const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();
                return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
        }

        static randomRange(min, max) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static trimArray(arr, maxLen = 10) {
                if (arr.length > maxLen) {
                        const len = arr.length - maxLen;
                        arr = arr.slice(0, maxLen);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                        arr.push(`${len} more...`);
                }
                return arr;
        }

        static base64(text, mode = 'encode') {
                if (mode === 'encode') return Buffer.from(text).toString('base64');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                if (mode === 'decode') return Buffer.from(text, 'base64').toString('utf8') || null;
                throw new TypeError(`${mode} is not a supported base64 mode.`);
        }

        static hash(text, algorithm) {
                return crypto.createHash(algorithm).update(text).digest('hex');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        }

        static async randomFromImgurAlbum(album) {
                const { body } = await request
                        .get(`https://api.imgur.com/3/album/${album}`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                        .set({ Authorization: `Client-ID ${IMGUR_KEY}` });
                if (!body.data.images.length) return null;
                return body.data.images[Math.floor(Math.random() * body.data.images.length)].link;
        }

        static today(timeZone) {
                const now = new Date();////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                if (timeZone) now.setUTCHours(now.getUTCHours() + timeZone);
                now.setHours(0);
                now.setMinutes(0);
                now.setSeconds(0);
                now.setMilliseconds(0);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                return now;
        }

        static tomorrow(timeZone) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                const today = Util.today(timeZone);
                today.setDate(today.getDate() + 1);
                return today;
        }

        static async awaitPlayers(msg, max, min, { text = 'join game', time = 30000 } = {}) {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                const joined = [];
                joined.push(msg.author.id);
                const filter = res => {
                        if (msg.author.bot) return false;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                        if (joined.includes(res.author.id)) return false;
                        if (res.content.toLowerCase() !== text.toLowerCase()) return false;
                        joined.push(res.author.id);
                        return true;
                };////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                const verify = await msg.channel.awaitMessages(filter, { max, time });
                verify.set(msg.id, msg);
                if (verify.size < min) return false;
                return verify.map(message => message.author);
        }
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
        static async verify(channel, user, time = 30000) {
                const filter = res => {
                        const value = res.content.toLowerCase();////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                        return res.author.id === user.id && (yes.includes(value) || no.includes(value));
                };
                const verify = await channel.awaitMessages(filter, {
                        max: 1,////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                        time
                });
                if (!verify.size) return 0;
                const choice = verify.first().content.toLowerCase();
                if (yes.includes(choice)) return true;////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
                if (no.includes(choice)) return false;
                return false;
        }
}
////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
module.exports = Util;