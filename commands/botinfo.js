const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let randomtickhelp = "「Swen」#6101";
    let roleplaycmdhelp = "`http://discord.gg/ZGVAyWr`";

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("Informação do Bot")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Desenvolvedor", randomtickhelp)
    .addField("Discord", roleplaycmdhelp)


    message.channel.send(botembed).then(msg => msg.delete(5000))
}

module.exports.help = {
  name:"botinfo"
}
