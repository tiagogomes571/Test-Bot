const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!args[0] || args[0 == "ajuda"]) return message.reply(`Utilize: <@usuário> <motivo>`).then(msg => msg.delete(5000));

  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Sistema de Report")
  .setColor("#ff0000")
  .addField("Usuário reportado:", `${rUser} Com ID; ${rUser.id}`)
  .addField("Reportado por:", `${message.author} Com ID; ${message.author.id}`)
  .addField("Reportado em:", message.channel)
  .addField("Razão:", reason);

  let reportschannel = message.guild.channels.find(`name`, "📜reports");
  if(!reportschannel) return message.channel.send("Não foi possível encontrar o canal de 📜reports.").then(msg => msg.delete(5000))


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
