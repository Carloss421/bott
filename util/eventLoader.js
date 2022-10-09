const reqEvent = (event) => require(`../events/${event}`);////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
module.exports = client => {
  client.on('message', reqEvent('message'))
  client.on('ready', () => reqEvent('ready')(client));////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.
};

////Airfax Youtube Kanalından Alınmıştır Paylaşılması Yasaktır.