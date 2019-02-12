const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {

  let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let pReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));
  if(!args[0] || args[0 == "ajuda"]) return message.reply(`!prefixo <aqui coloca o prefixo>.`).then(msg => msg.delete(5000));

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

prefixes[message.guild.id] = {
  prefixes: args[0]
};

fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
  if (err) console.log(err)
});

let sEmbed = new Discord.RichEmbed()
.setColor("#ff0000")
.setTitle("Prefixo!")
.setDescription(`Definido como "${args[0]}"`);
message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefixo"
}
