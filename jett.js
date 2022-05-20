const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 3 });

client.once('ready', async () => {
  console.log(`
  [INFO] Application Online.
  `);
});

require('dotenv').config();
client.login(process.env.JETT_TOKEN);