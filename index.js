// Required packages
const { Client } = require('discord.js-selfbot-v13');
const { RichPresence, Util } = require('discord.js-selfbot-rpc');

// Client define 
const client = new Client({
  checkUpdate: false,
});
// Ready event
client.on('ready', async() => { 
    
    const applicationId = '807631455744294923'; // Your Application ID
    const LargeImage = await Util.getAssets(applicationId, '1'); // Large Image Name
    const SmallImage = await Util.getAssets(applicationId, '2'); // Small Image Name

    // Presence defines below
    // You can adjust it
    const presence = new RichPresence()
    .setApplicationId(applicationId)
    .setStatus('online') // online, idle, dnd
    .setType('STREAMING') // PLAYING, STREAMING, LISTENING, WATCHING
    .setName('Chrome')
    .setDetails('View Homepage')
    .setState('Searching anime...')
    .setAssetsLargeImage(LargeImage.id)
    .setAssetsLargeText('Chrome')
    .setAssetsSmallImage(SmallImage.id)
    .setAssetsSmallText('Google')
    .setTimestamp();
    // Sends presence to the client
    client.user.setPresence(presence.toData());
    
    console.log(`[RPC] - Running...`);
    console.log(`[LOGGED IN] - ${client.user.tag}!`);
    console.log(`[MADE BY] - Insane#0828`);
});
// Login to your account
client.login('MTU2MDY2MDI0NTE1NTY3NjE2.G3ElpJ.OiD0ZBSHwo_E6BfmA6OfkpsKmsCToecCca5XT4');
