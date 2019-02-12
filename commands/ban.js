const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));
    if(!args[0] || args[0 == "ajuda"]) return message.reply(`<@usuário> <motivo>`).then(msg => msg.delete(5000));
    if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("Você não pode banir esse usuário!").then(msg => msg.delete(5000));

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Sistema de Ban")
    .setColor("#ff0000")
    .addField("Usuário Banido:", `${bUser} Com ID ${bUser.id}`)
    .addField("Banido por:", `<@${message.author.id}> Com ID ${message.author.id}`)
    .addField("Banido em:", message.channel)
    .addField("Motivo:", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "punidos❌");
    if(!incidentchannel) return message.channel.send("Não foi possível encontrar o canal de punidos❌.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    message.delete().catch(O_o=>{});
    incidentschannel.send(incidentsEmbed);
}

module.exports.help = {
  name:"ban"
}
