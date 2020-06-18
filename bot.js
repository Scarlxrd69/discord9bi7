const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzIyNzI5MzQzNTc4NjY5MTI3.Xurmzg.uwe6K0xeHvLOewfkfK0lmNT8PbU"
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume:1};



client.login(token);

client.on('ready', () => {
    console.log("Bot is ready");
});

client.on('message', message => {
    if (message.author.bot)
        return;
    if (message.content.toLowerCase().startsWith("!play")) {
        let VoiceChannel = message.guild.channels.cache.find(channel => channel.id === '722973391765897261');
        if (VoiceChannel != null) {
            console.log(VoiceChannel.name + "was found and is a" + VoiceChannel + "channel.");
            VoiceChannel.join()
                .then(connection => {
                    console.log("Bot joined the channel");
                    const stream = ytdl('https://www.youtube.com/watch?v=zzb5hdRLbu4' , { filter : 'audioonly'});
                    const dispatcher = connection.play(stream, streamOptions);
                    dispatcher.on('end', () => {
                        VoiceChannel.leave();
                    })

                })
                .catch();
        }
    }

});