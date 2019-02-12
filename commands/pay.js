const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345
        if(!args[0] || args[0 == "ajuda"]) return message.reply(`!transferir <@usuário> <quantidade>`).then(msg => msg.delete(5000));
  if(!coins[message.author.id]){
    return message.reply("Tu não tens moedas!").then(msg => msg.delete(5000))
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[1]) return message.reply("Não tens moedas suficientes!").then(msg => msg.delete(5000));

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} transferiu para ${pUser} ${args[1]} moeda(s).`).then(msg => msg.delete(5000));

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "transferir"
}
