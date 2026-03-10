const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', async () => {
    try {
        const channel = await client.channels.fetch(process.env.CHANNEL_ID);
        const messages = await channel.messages.fetch({ limit: 10 });
        
        const data = messages.map(m => ({
            yazar: m.author.username,
            icerik: m.content,
            tarih: m.createdAt.toLocaleDateString('tr-TR')
        }));

        fs.writeFileSync('duyurular.json', JSON.stringify(data, null, 2));
        console.log('Duyurular güncellendi!');
    } catch (e) {
        console.error('Hata:', e);
    }
    process.exit();
});

client.login(process.env.DISCORD_TOKEN);
