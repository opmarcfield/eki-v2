const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  // This happens when the bot logs in 
  console.log("Eki is in da house, ekihelp for info");
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

const prefix = "eki"
client.on("message", (message) => {
  // this happens when a message is received 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Beta-eki täs moro. En osaa viel oikein mitään. Admin @Opa osaa mua vähän komentaa, mut muiden komennot rajottuu aika pieniin. 'Ekikomennot' for more info");
  } else

  if (message.content.startsWith(prefix + "komennot")) {
    message.channel.send("Meikän komennot: ekihauku, ekikehu, ekiauta, ekisoita");
  }
});


client.login(process.env.TOKEN);
