const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let pReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));


    let randomtickhelp = "`「Swen」`";
    let boxcmdtestehelp = "`@[02]DontCry#3736 | @Сандро#9141 | @Guga#3108`";
    let normalmsghelp = "`@Bernardes#7339 | @lobomau571#9207 | @Rijo#0930`";
    let roleplaycmdhelp = "`@afonsombcm#1514 | @Brubru#8592 | @Jokini#2338`";

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Membros da STAFF")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField("[Dono]",randomtickhelp)
    .addField("[Admin]", boxcmdtestehelp)
    .addField("[Mod]", normalmsghelp)
    .addField("[Helper]", roleplaycmdhelp)


    message.channel.send(serverembed).then(msg => msg.delete(10000))
}

module.exports.help = {
  name:"staff"
}
