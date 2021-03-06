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
  "vois": "vois ei tarkota kyllä, eikä ei. vois on legendaarinen vastaus jolla ei sitouduta mihinkään",
  "Vois": "vois ei tarkota kyllä, eikä ei. vois on legendaarinen vastaus jolla ei sitouduta mihinkään",
  "Ayy": "Ayy, lmao!",
  "Wat": "Say what?",
  "wat": "Say what?",
  "lol": "hahah lolll",
  "Lol": "loll :D",
  "haha": "hahaha :D",
  "Haha": "hahahhha :D aika hauska",
  "Mitäs tänää?": "niimpä, mitäs tänää?",
  "hä": "hä?",
  "haloo": "haloo @everyone",
};

const swearWords = ["vittu", "vitun", "vitum", "saatana", "paska", "perkele", "Vittu", "Vitun", "Vitum", "Saatana", "Paska", "Perkele"];
client.on("message", (message) => {
   if (message.author.bot) return;
  
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Kirosana spotted and logged into database");
  // Or just do message.delete();
  }
});

const targaryantopics = ["fortnite", "Fortnite"];
client.on("message", (message) => {
     if (message.author.bot) return;
if( targaryantopics.some(word => message.content.includes(word)) ) {
  message.reply("eiks tota peliä pelaa aika paljo just lapset? :D");
  // Or just do message.delete();
  }
});

// client.on('message', message=> {
 //    if (message.isMentioned(client.users.get('375767320070717440'))) {
//     message.reply('Master @Opa...you have been summoned');
// }
// });

// client.on('message', message=> {
 //    if (message.isMentioned(client.users.get('375767320070717440'))) {
 //    message.reply('Jussiii !@jusinho');
// }
// });
// NYT MENE EPÄIN VITTUA NÄILLÄ KOODEILLA

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user)) {
    message.channel.send('Hä? Eki täs, mitä ny? "ekihelp" for info or drop me a DM');
}
    if (message.content === 'waka flocka') {
        message.channel.send('I go hard in the motherfucking paint, nigga');
        message.channel.send('Leave you stinking, nigga');
        message.channel.send('What the fuck you thinking, nigga?');
        message.channel.send('http://i.imgur.com/FYHde.jpg');
        }
});

client.on("message", (message) => {
     if (message.author.bot) return;
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

client.on("message", (message) => {
     if (message.author.bot) return;
   if (message.content === 'eki self-destruct') {
     if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
  return message.reply("ha ha ha"); 
  let count = 0;
  let ecount = 0;
  for(let x = 0; x < 11; x++) {
    message.channel.send(`self-destruction in progress ${x} / 10`)
      .then(m => {
        count++;
        console.log('reached', count, ecount);
      })
      .catch(m => {
        console.error(m);
        ecount++;
        console.log('reached', count, ecount);
        message.channel.send("koijattu :D");
        });
     }
     }
});

client.on("message", (message) => {
  // If the message is "what is my avatar"
  if (message.content === 'What is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on("message", (message) => {
  // this happens when a message is received
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Beta-eki täs moro. En osaa viel oikein mitään. Admin @Opa osaa mua vähän komentaa, mut muiden komennot rajottuu aika pieniin. 'ekikomennot' for more info");
  } 
  
  if (message.content.startsWith(prefix + "komennot")) {
    message.channel.send("Meikän komennot: ekihauku, ekikehu, ekiauta, ekisoita, ekilokaatio");
  }
  if (message.content.startsWith(prefix + "hauku")) {
    message.reply("Vittu mikä pelle! Hommaa muija");
  }
  if (message.content.startsWith(prefix + "kehu")) {
    message.reply("Vittu mikä sonni! Hyvä ja komee rikas tyyppi!");
  }
  if (message.content.startsWith(prefix + "auta")) {
    message.reply("Valitetavasti en osaa auttaa");
  }
  if (message.content.startsWith(prefix + "soita")) {
    message.reply("Valitetavasti en osaa soittaa muuta kun KPOP tällä hetkellä");
  }
  if (message.content.startsWith(prefix + "lokaatio")) {
    message.reply("Mun ruumis on täällä: https://github.com/opmarcfield/eki-v2 ja mun sielu on Herokussa ");
  }
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
       if(!message.member.roles.some(r=>["Admin", "Mode", "Mode 1.1"].includes(r.name)) )
      return message.reply("I'm terribly sorry, but your rank is too low");
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  if(command === "add") {
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("I'm terribly sorry, but your rank is too low");

    message.channel.send("XP system development in process");
  }
  if(command === "kerro") {
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
      return message.reply("don't tell me what to do ");

    message.channel.send("Even mods can use command 'say!' now, enjoy your anonymity!");
  }
});

client.login(process.env.TOKEN);
