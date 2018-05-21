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
const responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp"
};
client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});
client.on("message", (message) => {
  // this happens when a message is received
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Beta-eki täs moro. En osaa viel oikein mitään. Admin @Opa osaa mua vähän komentaa, mut muiden komennot rajottuu aika pieniin. 'ekikomennot' for more info");
  } else

  if (message.content.startsWith(prefix + "komennot")) {
    message.channel.send("Meikän komennot: ekihauku, ekikehu, ekiauta, ekisoita");
  }
  if (message.content.startsWith(prefix + "hauku")) {
    message.channel.send("Vittu mikä pelle! Hommaa muija");
  }
  if (message.content.startsWith(prefix + "kehu")) {
    message.channel.send("Vittu mikä sonni! Hyvä ja komee rikas tyyppi!");
  }
  if (message.content.startsWith(prefix + "auta")) {
    message.channel.send("Valitetavasti en osaa auttaa");
  }
  if (message.content.startsWith(prefix + "soita")) {
    message.channel.send("Valitetavasti en osaa soittaa muuta kun KPOP tällä hetkellä");
  }
});


client.login(process.env.TOKEN);
