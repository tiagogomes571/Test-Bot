exports.run = (bot, msg, params = []) => {
  msg.channel.sendMessage('Ping?')
    .then(message => {
      message.edit(`O seu ping é ${message.createdTimestamp - msg.createdTimestamp}ms!`).then(msg => msg.delete(4000));

    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0

};

exports.help = {
  name: "ping",

}
