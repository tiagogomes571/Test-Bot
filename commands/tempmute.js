const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!args[0] || args[0 == "ajuda"]) return message.reply(`<@usuário> <tempo> (1s/1m/1h)`).then(msg => msg.delete(5000));
  if(tomute.hasPermission("MUTE_MEMBERS")) return message.reply("Permissões insuficientes.").then(msg => msg.delete(5000));

  let muterole = message.guild.roles.find(`name`, "🤬Mutados🤬");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "🤬Mutados🤬",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Você não especificou o tempo! Exemplo: <@usuário> <60s>").then(msg => msg.delete(5000));

  await(tomute.addRole(muterole.id));
  message.reply(`o <@${tomute.id}> foi silenciado por ${ms(ms(mutetime))}!`).then(msg => msg.delete(5000));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.reply(`o <@${tomute.id}> já pode falar!`).then(msg => msg.delete(5000));
  }, ms(mutetime));

}

module.exports.help = {
  name:"mute"
}
