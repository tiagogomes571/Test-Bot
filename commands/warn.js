const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));
  if(!wUser) return message.reply("!avisar <@usuário> <motivo>").then(msg => msg.delete(5000));
  if(wUser.hasPermission("KICK_MEMBERS")) return message.reply("Você não pode avisar esse usuário!").then(msg => msg.delete(5000));
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Sistema de avisos")
  .setAuthor(message.author.username)
  .setColor("#ff0000")
  .addField("Usuário avisado:", `${wUser}`)
  .addField("Avisado em:", message.channel)
  .addField("Número de avisos:", warns[wUser.id].warns)
  .addField("Motivo:", reason);

  let warnchannel = message.guild.channels.find(`name`, "punidos❌");
  if(!warnchannel) return message.reply("Não foi possível encontrar o canal").then(msg => msg.delete(5000));

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "🤬Mutados🤬");
    if(!muterole) return message.reply("Você deve criar esse cargo.").then(msg => msg.delete(5000));

    let mutetime = "300s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> Foi mutado automaticamente durante 5 minutos. O próximo aviso será ban automaticamente.`).then(msg => msg.delete(10000));

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> Já pode falar. O proximo aviso será ban permanente`).then(msg => msg.delete(10000))
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    sendMessage.channel.send(`<@${wUser.id}> Foi banido permanente. Por ter 3 avisos`).then(msg => msg.delete(10000))

  }

}

module.exports.help = {
  name: "avisar"
}
