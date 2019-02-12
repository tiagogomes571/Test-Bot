const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let teste123456 = "`!botinfo`";
    let randomtickhelp = "`!ping`";
    let boxcmdtestehelp = "`!staff`";
    let normalmsghelp = "`!report <@usuário> <motivo>`";
    let teste12345 = "`!saldo | !nivel | !transferir`";


    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Comandos do Servidor")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .addField("Informações do bot",teste123456)
    .addField("Ping",randomtickhelp)
    .addField("Equipa STAFF", boxcmdtestehelp)
    .addField("Reportar Pessoas", normalmsghelp)
    .addField("Sistema de moedas", teste12345)


    message.channel.send(serverembed).then(msg => msg.delete(7000))
}

module.exports.help = {
  name:"ajuda"
}
