const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));
    if(!args[0] || args[0 == "ajuda"]) return message.reply(`<@usuário> <motivo>`).then(msg => msg.delete(5000));
    if(kUser.hasPermission("KICK_MEMBERS")) return message.reply("Você não pode kickar esse usuário!").then(msg => msg.delete(5000));

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Sistema de Kick")
    .setColor("#ff0000")
    .addField("Usuário kickado:", `${kUser} with ID ${kUser.id}`)
    .addField("Kickado por:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kickado em:", message.channel)
    .addField("Motivo:", kReason);

    let kickChannel = message.guild.channels.find(`name`, "punidos❌");
    if(!kickChannel) return message.channel.send("Não foi possível encontrar o canal de punidos❌.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    message.delete().catch(O_o=>{});
    kickchannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
