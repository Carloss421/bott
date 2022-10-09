const Discord = require('discord.js');
const db = require('quick.db');////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
const { prefix, a } = require('../ayarlar.json');
exports.run = async (client, message, args) => {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
let cfxuser = message.mentions.members.first()
let cfxkaralisteid = args[1];////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
let cfxkaralistededb = await db.fetch(`cfxkaralistede${message.author.id}`)
let cfxkaralistekanaldb = await db.fetch(`cfxkaralistekanaldb${message.guild.id}`)
let cfxkanal2 = message.guild.channels.find('id', cfxkaralistekanaldb)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
let cfxkanal = message.mentions.channels.first()
const karaliste = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setColor(`RED`)
.setTitle(`${client.emojis.get(a.emoji.taç)} ${message.guild.name} KARALİSTE`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setDescription(`> **Karaliste Logunu Ayarlamak İçin:** \`${prefix}karaliste kanalayarla #kanal\` \n > **Karalisteye Birini Eklemek İçin:** \`${prefix}karaliste ekle ID\` \n > **Karalisteden Birini Silmek İçin:** \`${prefix}karaliste kaldır ID\` \n > **Karaliste Log Kanalını Kapatmak İçin:** \`${prefix}karaliste kanalsıfırla\` \n > **Sistemi Sıfırlamak İçin:** \`${prefix}karaliste sıfırla\` `);
if(!args[0]) return message.channel.send(karaliste)

if(args[0] == 'sıfırla') {////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
	db.delete(`cfxkaralistededb${cfxkaralisteid}`)
	db.delete(`cfxkaralistekanaldb${message.guild.id}`)
	message.channel.send(`Sistem Kapatıldı.`)
	return; }
if(args[0] == 'kanalsıfırla') {
	db.delete(`cfxkaralistekanaldb${message.guild.id}`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
	message.channel.send(`Kanal Sıfırlandı`)
	return; }
if(args[0] == 'kanalayarla') {
	db.set(`cfxkaralistekanaldb${message.guild.id}`, cfxkanal.id)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
	message.channel.send(`Karaliste Logu ${cfxkanal} olarak ayarlandı.`)
	return; }
if(args[0] == 'ekle') {
	if(args[1] == cfxkaralisteid) db.set(`cfxkaralistededb${cfxkaralisteid}`, 'karalistede')
  if(args[1] == cfxuser) db.set(`cfxkaralistededb${cfxuser.id}`, 'karalistede')
  let cfxdb11 = [];////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if(args[1] == cfxuser) cfxdb11 = cfxuser
  if(args[1] == cfxkaralisteid) cfxdb11 = `<@${cfxkaralisteid}>`
const alındı = new Discord.RichEmbed()////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setColor(`RED`)
.setTitle(`${client.emojis.get(a.emoji.tik)} ${message.guild.name} KARALİSTE`)
.setDescription(`${cfxdb11} **Karalisteye Alındı!**`)
cfxkanal2.send(alındı)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.

	return }////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
if(args[0] == 'kaldır') {
	if(args[1] == cfxkaralisteid) db.delete(`cfxkaralistededb${cfxkaralisteid}`)
  if(args[1] == cfxuser) db.delete(`cfxkaralistededb${cfxuser.id}`)
  let cfxdb22 = [];////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
  if(args[1] == cfxuser) cfxdb22 = cfxuser
  if(args[1] == cfxkaralisteid) cfxdb22 = `<@${cfxkaralisteid}>`
const verildi = new Discord.RichEmbed()
.setColor(`RED`)
.setTitle(`${client.emojis.get(a.emoji.tik)} ${message.guild.name} KARALİSTE`)////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
.setDescription(`${cfxdb22} **Karalisteden Silindi!**`)
cfxkanal2.send(verildi)
	return }}
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
exports.help = { name: 'karaliste' };