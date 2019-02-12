const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissões insuficientes.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("!avisos <@usuário>");
  let warnlevel = warns[wUser.id].warns;
  message.reply(`o <@${wUser.id}> tem ${warnlevel} aviso(s).`).then(msg => msg.delete(10000));

}

module.exports.help = {
  name: "avisos"
}
