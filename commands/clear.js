const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));
  if(!args[0] || args[0 == "ajuda"]) return message.reply(`!limpar <quantidade> (o limite é 100).`).then(msg => msg.delete(5000));
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} Mensagens limpas.`).then(msg => msg.delete(3000));
  });
}

module.exports.help = {
  name: "limpar"
}
